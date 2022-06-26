import * as msal from "@azure/msal-browser"

var msalConfig = {
    auth: {
        clientId: "c397c1cc-c3d0-465f-9a2c-f7bc3d608a0b"
    }
};
export default function login() {
    var loginRequest = {
        scopes: ["user.read", "openid.read"]
    };
    var msalInstance = new msal.PublicClientApplication(msalConfig);
    msalInstance.loginPopup({}).then((response) => {
        if (response === null) {
            alert("There was an error authenticating you (response was null)");
            return;
        }
        console.log(response);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                alert(this.responseText);
            }
        };
        xhttp.open("GET", "https://management.azure.com/subscriptions/9345cdc4-0b2b-4268-b99f-33720e0dc8a9/resources?api-version=2021-04-01", true);
        xhttp.setRequestHeader("Content-type", "application/json", 'Authorization', 'Bearer ' + response.accessToken);
        xhttp.send();
        console.log(xhttp.responseText)
    }).catch((error) => {
        console.error(error);
    });
}
export { login };