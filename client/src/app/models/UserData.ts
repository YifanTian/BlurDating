
export class UserData {
    _id: String;
    username: String;
    name: String;
    suername: String;
    gender: String;
    status: String;
    birthday: String;   //date format
    ageRange: String;
    address: String;        // optional
    relationshipStatus: String;
    height: String;
    ethnicity: String;
    occupation: String;
    education: String;
    politics: String;
    zip: String;        // optional
    avatar: String;  //a link to the user avatar (initially will be uploaded locally to the app)
    timezone: String; 
    subType: String;    // Subscription type
    subStatus: String;  // Subscription status
    subExpiry: String;  // Subscription expiration
    invitedBy: String; // the id of the user who has invited them
    points: Number; // from invitations
    answers:  Object; // answers to the preselected questions . Optional array of objects, containing question & answer
}