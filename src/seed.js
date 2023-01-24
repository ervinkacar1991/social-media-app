/* eslint-disable no-plusplus */
// NOTE: replace 'NvPY9M9MzFTARQ6M816YAzDJxZ72' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
  const users = [
    {
      userId: "m1YbcIEqjyRpMU5U9Trh87R1XGP2",
      username: "ervinkacar",
      fullName: "Ervin Kacar",
      emailAddress: "kacarervin@gmail.com",
      following: ["2"],
      followers: ["2", "3", "4"],
      dateCreated: Date.now(),
    },
    {
      userId: "2",
      username: "remzudin",
      fullName: "Remzo Gusinac",
      emailAddress: "remzogusinac01@gmail.com",
      following: [],
      followers: ["m1YbcIEqjyRpMU5U9Trh87R1XGP2"],
      dateCreated: Date.now(),
    },
    {
      userId: "3",
      username: "darisdiesel",
      fullName: "Daris Hodzic",
      emailAddress: "daris.hodzic.DH@gmail.com",
      following: [],
      followers: ["m1YbcIEqjyRpMU5U9Trh87R1XGP2"],
      dateCreated: Date.now(),
    },
    {
      userId: "4",
      username: "dzemil",
      fullName: "Dzemil Dupljak",
      emailAddress: "dzemildupljak4795@gmail.com",
      following: [],
      followers: ["m1YbcIEqjyRpMU5U9Trh87R1XGP2"],
      dateCreated: Date.now(),
    },
    {
      userId: "5",
      username: "fare",
      fullName: "Faris Mecinovic",
      emailAddress: "faris.mecinovic.np@gmail.com",
      following: [],
      followers: ["m1YbcIEqjyRpMU5U9Trh87R1XGP2"],
      dateCreated: Date.now(),
    },
    {
      userId: "6",
      username: "ilmudin",
      fullName: "Izudin Mavric",
      emailAddress: "izoomavric@gmail.com",
      following: [],
      followers: ["m1YbcIEqjyRpMU5U9Trh87R1XGP2"],
      dateCreated: Date.now(),
    },
    {
      userId: "7",
      username: "seki",
      fullName: "Semsudin ef. Plojovic",
      emailAddress: "semsudinplojovic@gmail.com",
      following: [],
      followers: ["m1YbcIEqjyRpMU5U9Trh87R1XGP2"],
      dateCreated: Date.now(),
    },
    {
      userId: "8",
      username: "dzenan",
      fullName: "Dzenan Kosuta",
      emailAddress: "dzenan_kosuta@hotmail.com",
      following: [],
      followers: ["m1YbcIEqjyRpMU5U9Trh87R1XGP2"],
      dateCreated: Date.now(),
    },
    {
      userId: "9",
      username: "dzele-fetch",
      fullName: "Dzelal Dupljak",
      emailAddress: "dzelal_d@live.com",
      following: [],
      followers: ["m1YbcIEqjyRpMU5U9Trh87R1XGP2"],
      dateCreated: Date.now(),
    },
    {
      userId: "10",
      username: "imran",
      fullName: "Imran Midovic",
      emailAddress: "imranmidovic@gmail.com",
      following: [],
      followers: ["m1YbcIEqjyRpMU5U9Trh87R1XGP2"],
      dateCreated: Date.now(),
    },
    {
      userId: "11",
      username: "suki",
      fullName: "Suad Suljovic",
      emailAddress: "suuad@live.com",
      following: [],
      followers: ["m1YbcIEqjyRpMU5U9Trh87R1XGP2"],
      dateCreated: Date.now(),
    },
    {
      userId: "12",
      username: "irfan-design",
      fullName: "Irfan Ugljanin",
      emailAddress: "hello@irfanugljanin.com",
      following: [],
      followers: ["m1YbcIEqjyRpMU5U9Trh87R1XGP2"],
      dateCreated: Date.now(),
    },
    {
      userId: "13",
      username: "mirzadelic",
      fullName: "Mirza Delic",
      emailAddress: "mirzadelic1@gmail.com",
      following: [],
      followers: ["m1YbcIEqjyRpMU5U9Trh87R1XGP2"],
      dateCreated: Date.now(),
    },
    {
      userId: "14",
      username: "camil",
      fullName: "Camil Plojovic",
      emailAddress: "cplojovic@gmail.com",
      following: [],
      followers: ["m1YbcIEqjyRpMU5U9Trh87R1XGP2"],
      dateCreated: Date.now(),
    },
    {
      userId: "15",
      username: "dzoni",
      fullName: "Nikola Glisovic",
      emailAddress: "dzoniblejz2@gmail.com",
      following: [],
      followers: ["m1YbcIEqjyRpMU5U9Trh87R1XGP2"],
      dateCreated: Date.now(),
    },
    {
      userId: "16",
      username: "hamza",
      fullName: "Hamza Plojovic",
      emailAddress: "hamzaplojovic9@gmail.com",
      following: [],
      followers: ["m1YbcIEqjyRpMU5U9Trh87R1XGP2"],
      dateCreated: Date.now(),
    },
    {
      userId: "17",
      username: "ajsa",
      fullName: "Ajsa Besirovic",
      emailAddress: "besirovicajsa@gmail.com",
      following: [],
      followers: ["m1YbcIEqjyRpMU5U9Trh87R1XGP2"],
      dateCreated: Date.now(),
    },
    {
      userId: "18",
      username: "muhamed",
      fullName: "Muhamed Muminovic",
      emailAddress: "muminovic_muhamed01@gmail.com",
      following: [],
      followers: ["m1YbcIEqjyRpMU5U9Trh87R1XGP2"],
      dateCreated: Date.now(),
    },
    {
      userId: "19",
      username: "aldin",
      fullName: "Aldin Halilovic",
      emailAddress: "aldinhalilovic06@gmail.com",
      following: [],
      followers: ["m1YbcIEqjyRpMU5U9Trh87R1XGP2"],
      dateCreated: Date.now(),
    },
    {
      userId: "20",
      username: "elvir",
      fullName: "Elvir Muslic",
      emailAddress: "elvirmuslic.dev@gmail.com",
      following: [],
      followers: ["m1YbcIEqjyRpMU5U9Trh87R1XGP2"],
      dateCreated: Date.now(),
    },
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection("users").add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection("photos")
      .add({
        photoId: i,
        userId: "2",
        imageSrc: `/images/users/raphael/${i}.jpg`,
        caption: "Saint George and the Dragon",
        likes: [],
        comments: [
          {
            displayName: "dali",
            comment: "Love this place, looks like my animal farm!",
          },
          {
            displayName: "orwell",
            comment: "Would you mind if I used this picture?",
          },
        ],
        userLatitude: "40.7128°",
        userLongitude: "74.0060°",
        dateCreated: Date.now(),
      });
  }
}
