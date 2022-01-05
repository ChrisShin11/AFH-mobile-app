# Anime for Humanity
    
Anime for Humanity is a non-profit organization whose mission is to challenge the stigma surrounding mental health, make mental health resources more accessible and friendly through the means of anime, cosplay and videogames, and share resources this organization offers to those suffering from mental health, including their friendly community.

**Frontend**
- React Native with Expo

**Backend**
- Express server

**Data Storage**
- AsyncStorage
- Firestore Database

## Setup
Install all the dependencies

```
# install frontend dependencies in the root directory
npm install

# install express server dependencies in the express_backend directory
cd express_backend
npm install
```
FireStore Databse SDK Setup <br>
Follow the link https://docs.expo.dev/guides/using-firebase/ to obtain the firebase configure <br>
Then replace the configure set up in root/db/firestore.ts

<p align="center">
<img src="readmePictures\firestore_config.png">    
 </p>

Email Host Setup
Replace the following codes with your hosting email information in root/express_backend/app.js
<p align="center">
<img src="readmePictures\express_email_setup.png">    
 </p>