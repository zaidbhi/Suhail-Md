const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="zh8559462@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "zᴀɪᴅ-ᴍᴅ" 


global.devs = "923357433862" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347010816280";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923107253460,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_14_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzksXG4gICAgICAgIDU0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDc2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA3MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg5LFxuICAgICAgICA2OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDksXG4gICAgICAgIDg1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDU4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTc2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzksXG4gICAgICAgIDUyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDg2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQsXG4gICAgICAgIDc3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NSxcbiAgICAgICAgMixcbiAgICAgICAgMTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzksXG4gICAgICAgIDY4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI2LFxuICAgICAgICAyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTM5LFxuICAgICAgICA3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg3LFxuICAgICAgICA3OCxcbiAgICAgICAgNixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTExLFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUxLFxuICAgICAgICAzMixcbiAgICAgICAgNTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDUsXG4gICAgICAgIDM2LFxuICAgICAgICA0NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNSxcbiAgICAgICAgNixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDgzLFxuICAgICAgICA5NixcbiAgICAgICAgMjQyLFxuICAgICAgICA1NixcbiAgICAgICAgODMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDM0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjEyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTczLFxuICAgICAgICA2MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNyxcbiAgICAgICAgNzksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTksXG4gICAgICAgIDg5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDExMixcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDgxLFxuICAgICAgICAyNyxcbiAgICAgICAgOTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyLFxuICAgICAgICAxODYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFR3MrSHRiN3V3Y3l1azUvUXhhcWhiZDZiNjhnTFJXR2VTUU1PcUF3VDdrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzcF92STEwblM1Q2dncm1Za3FIRThnXCIsXG4gIFwicGhvbmVJZFwiOiBcImE4NDk0OTUwLWM3M2QtNGJjNi05YmU5LTllOGQ1ODBhNWFjY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MCxcbiAgICAgIDIwOSxcbiAgICAgIDIwNSxcbiAgICAgIDE3MyxcbiAgICAgIDEyMCxcbiAgICAgIDI1NCxcbiAgICAgIDE0NCxcbiAgICAgIDgsXG4gICAgICAxNTksXG4gICAgICAxNTEsXG4gICAgICAxMjMsXG4gICAgICAyMjEsXG4gICAgICAxNyxcbiAgICAgIDkwLFxuICAgICAgMjA5LFxuICAgICAgMjI5LFxuICAgICAgMTI1LFxuICAgICAgOTIsXG4gICAgICAxMzQsXG4gICAgICA3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMyxcbiAgICAgIDE3MixcbiAgICAgIDExMSxcbiAgICAgIDEwMSxcbiAgICAgIDczLFxuICAgICAgMTUyLFxuICAgICAgMzYsXG4gICAgICAxMjUsXG4gICAgICA1NyxcbiAgICAgIDI0MixcbiAgICAgIDQ5LFxuICAgICAgMTc0LFxuICAgICAgMTI1LFxuICAgICAgMjE4LFxuICAgICAgMjUxLFxuICAgICAgMjE1LFxuICAgICAgOTAsXG4gICAgICA2OSxcbiAgICAgIDgsXG4gICAgICAxOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiM1hCNkpHNVBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMTA4MTYyODA6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDI1Njg0OTUxNDcyNzoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BMbml0OEZFTGJkbzdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTnR2V0pYS1J6cXVEL0lHMVFicDIvemMvc0p0SWJFN0ovSHpKV2xnN24xND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJNNFNSK25TcHV0REVXcm9RellPRTU2YVlSTlRXWTZoY3B3eXNMTTdKcytOdUFJd20rZld2VGErQjdOenNRTmc4ZSt6MDMxak0zaEpNQkI0NTJvTWRCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKNDVEdnlubXRVUzVscHdINmtqSGRyamtwOFhsMThDSXBFMDdJMU5nQi82eFY2QUVEZG9sYitlRVZPNXZRcmtSL1VKeGJOd2t2V1NZaGRDeE8waHpBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDEwODE2MjgwOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjUwMDQzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRndhXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGd2EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIxWm1FejdlOEEvUWdITHdFZXJJNTZlNVNZY3lPR1lpc1kvRnFVUU15eG5FPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1NDE1ODM4NTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDI1MDA0NjU0MVwifSIKfQ== "  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // zᴀɪᴅ-ᴍᴅ"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "zᴀɪᴅ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "JonnyX",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
