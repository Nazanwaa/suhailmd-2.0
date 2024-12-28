const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "09016392788";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_47_12_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDUsXG4gICAgICAgIDYxLFxuICAgICAgICA3MixcbiAgICAgICAgMTk3LFxuICAgICAgICA2NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MyxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMxLFxuICAgICAgICA0NixcbiAgICAgICAgMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDY2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAzOCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjM2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk4LFxuICAgICAgICA3MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODgsXG4gICAgICAgIDkxLFxuICAgICAgICA4MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODEsXG4gICAgICAgIDYxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAzNixcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTQsXG4gICAgICAgIDczLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgODksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDMsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicXRkd2pBenBiTFNpT0ZvbXJwSHNnUFNEbnQvcXNrSkRXSTZlQjJwUTZIcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY21VeHBJcWJRUG1mc2Y5aEF3NWtOd1wiLFxuICBcInBob25lSWRcIjogXCJlOTVkZjdiMS0zZWQ4LTQyMWEtODQxNC0wNTQ1NzY2NjYzMzhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzMsXG4gICAgICAxMjUsXG4gICAgICA1MixcbiAgICAgIDI0OCxcbiAgICAgIDIwOCxcbiAgICAgIDQyLFxuICAgICAgMjMwLFxuICAgICAgMTYwLFxuICAgICAgMTM2LFxuICAgICAgMTk2LFxuICAgICAgMTg4LFxuICAgICAgNzAsXG4gICAgICAxNTgsXG4gICAgICAxMTksXG4gICAgICAxMCxcbiAgICAgIDMzLFxuICAgICAgMTMyLFxuICAgICAgMjA2LFxuICAgICAgNTIsXG4gICAgICAyMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUsXG4gICAgICAxMzMsXG4gICAgICAxMjEsXG4gICAgICAyMDcsXG4gICAgICAxMDEsXG4gICAgICAxMjAsXG4gICAgICAxNCxcbiAgICAgIDI3LFxuICAgICAgMjMzLFxuICAgICAgMTgzLFxuICAgICAgNzIsXG4gICAgICA2NSxcbiAgICAgIDM5LFxuICAgICAgMjYsXG4gICAgICA1OCxcbiAgICAgIDEyMSxcbiAgICAgIDIyMixcbiAgICAgIDE2OCxcbiAgICAgIDEwOSxcbiAgICAgIDE1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTOEw3VlAzUFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxNjM5Mjc4ODo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTnogc3VwcGx5IHNvbHV0aW9uXCIsXG4gICAgXCJsaWRcIjogXCI1NjE3NDM4MDU4NTA2Mjo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0x2MHk0QUJFTEtyd2JzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNmd0d1VsU3A2ajZsbytpWG5hQlZUWXkzNjh4MDl2bFFwUFcvemRXVy9TTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUSWYrTXVjNUdzbVZxUkZ2Mk1oaEcvQ0c1RHZ3eHF6bXRUZ0RrdnFvRFJ1eURZdURCWmRpOUw3dVBaeUNVWWZjTHNkaWExNjY5Q0o0TXJuK3RDRlhBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJVQm5NQTdhMTJ6L2todGZGOFE5YVBBYStvZStFV1Zzc0NreE5OZmxkb3pqRWcxNnlvSTFQd0RZd0wxeUdia1p5ZG5tUDZuOWd4Njk5dUk5WUtETTRBQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDE2MzkyNzg4OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1NDE1MjIxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
