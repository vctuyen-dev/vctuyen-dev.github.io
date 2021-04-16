
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDskH7D9b15O6ymC-TGtVKUN5l0ih209Y4",
    authDomain: "otonow-project.firebaseapp.com",
    projectId: "otonow-project",
    storageBucket: "otonow-project.appspot.com",
    messagingSenderId: "911089053771",
    appId: "1:911089053771:web:7ae6fff2894d411a5bddce"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

var contactRefs = firebase.database().ref('contact-member')

document.getElementById('test-form').addEventListener('submit', submitForm)

function submitForm(e){
    e.preventDefault()
    // Giờ, phút, giây hiện tại
    let createAt = moment().format('MMMM Do YYYY, h:mm:ss a')  
    let enterprise = getInputVal('inputEmail4')
    let contactName = getInputVal("inputPassword4")
    let contactNumber = getInputVal('phone')
    let position = getInputVal('level')
    let regexp = /^((296|254|209|204|291|222|275|256|274|271|252|290|292|206|236|262|261|215|251|277|269|219|226|239|220|225|293|218|221|258|297|260|213|263|205|214|272|228|238|229|259|210|257|232|235|255|203|233|299|212|276|227|208|237|234|273|294|207|270|211|216|086|096|097|098|032|033|034|035|036|037|038|039|089|090|093|070|079|077|076|078|088|091|094|083|084|085|081|082|092|052|056|058|059|099|0251|0252|0254|0255|0256|0257|0258|0259|0203|0204|0205|0206|0207|0208|0209|0220|0221|0222|0225|0226|0227|0228|0229|0232|0233|0234|0235|0236|0237|0238|0239|0260|0261|0262|0263|0269|0270|0271|0272|0273|0274|0275|0276|0277|0290|0291|0292|0293|0294|0296|0297|0299)[0-9]{7}$)|((024|028|021)[0-9]{8}$)\b/g;
    let checkingContactNumber = regexp.exec(contactNumber)
    // Save contact
    if (!contactName) {
        document.getElementById("dp-nlh").innerHTML = "Không được để trống thông tin";
        document.getElementById("dp-nlh").className = "dp-block error";
        document.getElementById("inputPassword4").className = "errorInput form-control h-40px";
    }
    else if(!checkingContactNumber){
        document.getElementById("dp-none").innerHTML = "Vui lòng cung cấp số điện thoại thật";
        document.getElementById("dp-none").className = "dp-block error";
        document.getElementById("phone").className = "errorInput form-control h-40px";
    }else {
        gtag('event', 'Click Form', {
            'event_category': 'Submit Form',
            'event_label': 'Landing V3',
            'event_callback': function () {
                console.log('Click Submit')
            }
          });
        document.getElementById("success").className = "success-text";
        document.getElementById("test-form").reset()
        saveContact(enterprise, contactName, contactNumber,position,createAt)
       
    }
    if (contactNumber === "") {
        document.getElementById("dp-none").innerHTML = "Không được để trống thông tin";
        document.getElementById("dp-none").className = "dp-block error";
        document.getElementById("phone").className = "errorInput form-control h-40px";
        
    }
    if (enterprise === "") {
        document.getElementById("email").innerHTML = "Không được để trống thông tin";
        document.getElementById("email").className = "dp-block error";
        document.getElementById("inputEmail4").className = "errorInput form-control h-40px";
    }
}
function changeInput() {
    document.getElementById("dp-none").className = "dp-none";
    document.getElementById("phone").className = "form-control h-40px";
    document.getElementById("success").className = "dp-none";
}
function changeInputName() {
    document.getElementById("dp-nlh").className = "dp-none";
    document.getElementById("inputPassword4").className = "form-control h-40px";
    document.getElementById("success").className = "dp-none";
}
function changeInputCompanyName() {
    document.getElementById("email").className = "dp-none";
    document.getElementById("inputEmail4").className = "form-control h-40px";
    document.getElementById("success").className = "dp-none";
}


// Function get value of Input

function getInputVal(id){
    return document.getElementById(id).value;
}

// Function Save Contact

function saveContact(enterprise, contactName, contactNumber ,position,createAt) {
    var newContact = contactRefs.push();
    newContact.set({
        enterprise: enterprise,
        contactNumber: contactNumber,
        contactName: contactName,
        position: position,
        createAt: createAt
    })

    console.log("Done")
}