# expense-tracker
This is a react native app and was created by using command: `npx create-react-native-app`

## Setup
In order to run this application, please execute following commands in the root folder:

- `yarn` to install all the packages
- `cd ios` to navigate to ios folder
- `npx pod-install` to install CocoaPods dependencies
- `cd ..` to return to root folder

## Running the application
- `yarn ios` to run the application on ios. Note: When developing it, I mainly use iOS simulator to test it out.
- `yarn web` to run the application on web. However, the color scheme and the styling is quite different from running it on iOS device.
- `yarn android` to run the application on android. I couldn't get it run properly using my simulator but I could run it on my actual device. The datepicker component is quite buggy for Android device however.
----------
## Features of this application
- Allow user to add expenses
- A dashboard which allow user to view all the expenses and show total expenses for current month

### Screenshots
![screenshot-done][screenshot-done]

----------
## Miscellaneous
- Unit test:
I have added a simple unit test to check for the dashboard screen to validate the expenses. The unit test can be triggered by using `jest` or `yarn test` commands.
- Redux-saga: Not familiar with it as I was using Redux-thunk. However, I implemented a redux-saga to retrieve a random user's first name which will be shown in dashboard screen.
----------
[screenshot-done]: ./docs/ios-2.gif "Screenshot of done app"