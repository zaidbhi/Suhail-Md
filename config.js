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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://f.uguu.se/SbcqvSeW.png" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ zᴀɪᴅ" 


global.devs = "923357433862" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923130333736";




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
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_12_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTk1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTksXG4gICAgICAgIDk1LFxuICAgICAgICA5NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkzLFxuICAgICAgICAyNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI4LFxuICAgICAgICA0NixcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzksXG4gICAgICAgIDc5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA4NixcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDY0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDY1LFxuICAgICAgICAxMixcbiAgICAgICAgNTAsXG4gICAgICAgIDMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjM0LFxuICAgICAgICA3MixcbiAgICAgICAgMTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI2LFxuICAgICAgICA2LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODksXG4gICAgICAgIDE4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ4LFxuICAgICAgICA0NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDcwLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQzLFxuICAgICAgICAyOSxcbiAgICAgICAgNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDExLFxuICAgICAgICAyMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjEzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDI4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg4LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjI3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMixcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTYxLFxuICAgICAgICA5NyxcbiAgICAgICAgNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg0LFxuICAgICAgICA0MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExLFxuICAgICAgICA5NixcbiAgICAgICAgMTE3LFxuICAgICAgICAzOCxcbiAgICAgICAgODEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlN0b0VOeXNuRlIrM3lodFhLL3phZWpWcVBVV3RPbEh4RWpZQU9OVDNzdkk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZyTUEySU5YVHoyN3BCUFMyTHdYbFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTM3NDBkNGMtMmY3Yi00MjBlLWJhMjItYTVlZTk0NWU0ZWEzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcxLFxuICAgICAgMTg4LFxuICAgICAgMjEyLFxuICAgICAgMTE0LFxuICAgICAgMTQ5LFxuICAgICAgMTI5LFxuICAgICAgMjAwLFxuICAgICAgNzksXG4gICAgICAxNjUsXG4gICAgICA1NyxcbiAgICAgIDcxLFxuICAgICAgMTIwLFxuICAgICAgMTAyLFxuICAgICAgMjQ4LFxuICAgICAgMTA1LFxuICAgICAgMTkzLFxuICAgICAgMTAzLFxuICAgICAgNzAsXG4gICAgICA2MSxcbiAgICAgIDE2MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTEsXG4gICAgICA5MCxcbiAgICAgIDk0LFxuICAgICAgMjA4LFxuICAgICAgNjQsXG4gICAgICAxOCxcbiAgICAgIDE0NSxcbiAgICAgIDEyMCxcbiAgICAgIDIxNSxcbiAgICAgIDQ4LFxuICAgICAgMTAwLFxuICAgICAgMTY2LFxuICAgICAgNzIsXG4gICAgICAyNCxcbiAgICAgIDEwOCxcbiAgICAgIDE5NyxcbiAgICAgIDE4NyxcbiAgICAgIDk1LFxuICAgICAgODAsXG4gICAgICAxNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN1o5MVJWNDNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzEzMDMzMzczNjoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjI5Mjk4Nzc2NTU2NTk6MjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSU9Yb09RREVQYURyN1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6QUtUQWM1RWl4OU95MlJmT3h0TUJwS0l4QW0vNkNDdHhFN3EzVDZVdFg0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkhiS1hvRXhPV0pmOUJDdzVObzdiaWFiRnM5QzVBdGJxbmYxRUdXeEFaRmxtcDkyVCtoak9PUDd5UjBqUDZ2dUVCdm5lR25CczVIRngwMFFDM2ViZUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm9FbE9zNWhsQmJzNXNvZkdBVWdXclpuOWpZRDM1SWdRdlNLdURrOWR3U2lzb2NLU3Fwc1ZzZEEzVzdWME40cnlXTXMvUTdJN0NlQkJrdm5ISE9qRER3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzEzMDMzMzczNjoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjUzMjM0OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxKcVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTEpxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQmEyc3JRR3pCeDFhd3VMSnpMbHVxZkhKckVDaDE2R1RmTkgwZ0xlNWJGND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMDE1NTQ4ODAyLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ zᴀɪᴅ 』```,
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Mangrio4u",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || " 3Mt4Z9g6bvQfSDu9iAkzG3C8",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-Lh2DAkXG72SO9F1KtCWlT3BlbkFJ74qT5UE5tIjTrOrr2OQN",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "sk-proj-Lh2DAkXG72SO9F1KtCWlT3BlbkFJ74qT5UE5tIjTrOrr2OQN";
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
