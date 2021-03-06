package com.goudianbao;

import android.os.Bundle;
import com.facebook.react.ReactActivity;
import com.cboy.rn.splashscreen.SplashScreen; // here
import cn.jpush.android.api.JPushInterface;

public class MainActivity extends ReactActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
        JPushInterface.init(this);
    }
    @Override
    protected void onPause() {
        super.onPause();
        JPushInterface.onPause(this);
    }

    @Override
    protected void onResume() {
        super.onResume();
        JPushInterface.onResume(this);
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "GouDianBao";
    }
}
