// web/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app’s Firebase config object:
firebase.initializeApp({
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
});

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/favicon.png', // or path to your icon
  });
});
