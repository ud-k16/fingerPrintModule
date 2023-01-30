
package com.fingerprintscanner;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;

import java.util.Map;
import java.util.HashMap;
import java.util.concurrent.Executor;
import android.util.Log;
import android.widget.Toast;
import androidx.biometric.*;
import androidx.core.content.ContextCompat;
import androidx.annotation.NonNull;
import androidx.fragment.app.FragmentActivity;

public class FingerPrintScanner extends ReactContextBaseJavaModule {

    FingerPrintScanner(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "FingerPrintScanner";
    }

    // creating instance of BioMetricManager
    BiometricManager biometricManager = BiometricManager.from(getReactApplicationContext());

    // private Executor executor;
    // private BiometricPrompt biometricPrompt;
    // private BiometricPrompt.PromptInfo promptInfo;

    @ReactMethod
    public void isBiometrixAvailable(Callback callBack) {
        // writable map to send to js
        WritableMap map = Arguments.createMap();
        // callwork text
        map.putString("callback", " callback works");

        switch (biometricManager.canAuthenticate(BiometricManager.Authenticators.BIOMETRIC_STRONG)) {
            case BiometricManager.BIOMETRIC_SUCCESS:
                map.putString("status", " App can authenticate using biometrics.");
                map.putBoolean("isBiometrix", true);
                displayToast("yes biomatrix available");
                break;
            case BiometricManager.BIOMETRIC_ERROR_NO_HARDWARE:
                Log.e("MY_APP_TAG", "No biometric features available on this device.");
                // b.biometricCardView.setVisibility(View.GONE);
                break;
            case BiometricManager.BIOMETRIC_ERROR_HW_UNAVAILABLE:
                Log.e("MY_APP_TAG", "Biometric features are currently unavailable.");
                // b.biometricCardView.setVisibility(View.GONE);
                break;
            case BiometricManager.BIOMETRIC_ERROR_NONE_ENROLLED:
                Log.e("MY_APP_TAG", "Biometric  no enrolled");
                // Prompts the user to create credentials that your app accepts.
                // final Intent enrollIntent = new Intent(Settings.ACTION_BIOMETRIC_ENROLL);
                // enrollIntent.putExtra(Settings.EXTRA_BIOMETRIC_AUTHENTICATORS_ALLOWED,BiometricManager.Authenticators.BIOMETRIC_WEAK
                // | BiometricManager.Authenticators.DEVICE_CREDENTIAL);
                // startActivityForResult(enrollIntent, IntentIntegrator.REQUEST_CODE);
                break;
        }
        // invokes callback to send the map to js
        callBack.invoke(map);

    }

    @ReactMethod
    public void showFingerPrintAuthDialog() {

        FragmentActivity activity = (FragmentActivity) getCurrentActivity();
        Executor executor = ContextCompat.getMainExecutor(getReactApplicationContext());
        BiometricPrompt biometricPrompt = new BiometricPrompt(activity,
                executor, new BiometricPrompt.AuthenticationCallback() {
                    @Override
                    public void onAuthenticationError(int errorCode,
                            @NonNull CharSequence errString) {
                        super.onAuthenticationError(errorCode, errString);
                        displayToast("Authentication error: " + errString);
                    }

                    @Override
                    public void onAuthenticationSucceeded(
                            @NonNull BiometricPrompt.AuthenticationResult result) {
                        super.onAuthenticationSucceeded(result);
                        displayToast("Authentication succeeded!");
                    }

                    @Override
                    public void onAuthenticationFailed() {
                        super.onAuthenticationFailed();
                        displayToast("Authentication failed");
                    }
                });

        // promptinfo
        BiometricPrompt.PromptInfo promptInfo = new BiometricPrompt.PromptInfo.Builder()
                .setTitle("Biometric login for my app")
                .setSubtitle("Log in using your biometric credential")

                // .setAllowedAuthenticators(
                // BiometricManager.Authenticators.BIOMETRIC_STRONG)
                .setNegativeButtonText("Use account password")
                .build();
        biometricPrompt.authenticate(promptInfo);
    }

    public void displayToast(String text) {
        Toast.makeText(getReactApplicationContext(),
                text, Toast.LENGTH_SHORT)
                .show();
    }

}