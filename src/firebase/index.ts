import firebase from 'react-native-firebase';
import AsyncStorage from '@react-native-community/async-storage';


class Firebase {
    notificationOpenedListener: Function | undefined;
    notificationListener: any;
    messageListener: any;
    async allowFirebase() {
        const enabled = await firebase.messaging().hasPermission();
        if (!enabled) {
            this.requestPermission();
        }

    }
    //2
    private async requestPermission() {
        try {
            await firebase.messaging().requestPermission();
        } catch (error) {
        }
    }
    //3
    async getToken() {

        let fcmToken = await AsyncStorage.getItem('fcmToken');
        // console.warn('token' + fcmToken);
        if (!fcmToken) {
            fcmToken = await firebase.messaging().getToken();

            if (fcmToken) {
                // user has a device token
                await AsyncStorage.setItem('fcmToken', fcmToken);
            }
        }

        return fcmToken;

    }


    async createNotificationListeners(navigate: any) {
        try {

            /*
            * Triggered for data only payload in background
            * */

            this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen: any) => {

                const { data } = notificationOpen.notification;
                if (!!data) {
                    
                }
                // console.warn('open');
            });
            /*
                         * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
                         * */
            const notificationOpen = await firebase.notifications().getInitialNotification();
            // this.Noti();
            if (notificationOpen) {
                console.warn('open 2');
                const { data } = notificationOpen.notification;
                if (!!data) {
                    
                }
            }

            /*
           * Triggered for data only payload in foreground
           * */
            this.notificationListener = firebase.notifications().onNotification((notification) => {
                console.warn('cc', notification)
                if (notification) {
                    
                }
            });
        }
        catch (err) {
            console.log(err);
        }

    }

    show = (title, body, time) => {
        const channel = new firebase.notifications.Android.Channel(
            'channelId',
            'Channel Name',
            firebase.notifications.Android.Importance.Max
        )
            .enableVibration(true)
            .setVibrationPattern([500])
            .setDescription('Notifications');
        firebase.notifications().android.createChannel(channel)

        const localNotification = new firebase.notifications.Notification()
            .setNotificationId('id123')
            .setTitle(title)
            .setData({
                title: title,
                body: body,
            })
            .setSound('default')
            .android.setVibrate([500, 500])
            .android.setDefaults([firebase.notifications.Android.Defaults.Vibrate])
            .android.setGroupAlertBehaviour(firebase.notifications.Android.GroupAlert.All)
            .android.setCategory(firebase.notifications.Android.Category.Alarm)
            .android.setChannelId(channel.channelId)
            .android.setSmallIcon('ic_notification')
            .android.setColor('#000000')
            .android.setPriority(firebase.notifications.Android.Priority.High)
            .android.setBigText(body);

        firebase
            .notifications()
            .scheduleNotification(localNotification, {
                fireDate: time.getTime()
            })
            .catch(err => console.error(err));
        firebase
            .notifications()
            .getScheduledNotifications()
            .then(notifications => {
                console.log("logging notifications", notifications);
                // firebase.notifications()
                //     .displayNotification(localNotification)
                //     .catch(err => console.error(err));
            });
    }
}


export default new Firebase;