const password="Forecaster12312";


function login(){

let pass=document.getElementById("password").value;


if(pass===password){

window.location="dashboard.html";

}

else{

document.getElementById("error").innerHTML=
"Incorrect Password";

}

}



function changeStatus(){

let status=document.getElementById("status").value;


let messages={


online:
`🟢 Online

🟢 Apex Weather Service is now OPERATIONAL.
All systems are online. Alerts, forecasts, and weather monitoring are active.`,


maintenance:
`🟡 Maintenance

🟡 Apex Weather Service is under maintenance.
Some features may be temporarily unavailable while updates are applied.`,


degraded:
`🟠 Degraded

🟠 Apex Weather Service is experiencing degraded performance.
Some commands or alerts may be delayed while we investigate.`,


outage:
`🔴 Outage

🔴 Apex Weather Service is currently OFFLINE.
We are investigating the issue and working to restore service as quickly as possible.`,


update:
`🔵 Update Complete

🔵 Update Complete.
The latest version has been deployed successfully. All services are operating normally.`,


restart:
`🔄 Restarting

🔄 Apex Weather Service is restarting.
The bot will be back online shortly.`


};


document.getElementById("message").value=
messages[status];


}



function copyText(){

navigator.clipboard.writeText(
document.getElementById("message").value
);

alert("Copied!");

}
