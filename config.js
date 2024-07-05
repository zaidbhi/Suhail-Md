const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923357433862" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923349852285";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923349852285,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_02_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMixcbiAgICAgICAgMjUyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTY1LFxuICAgICAgICA5MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNSxcbiAgICAgICAgMzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTg2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDU4LFxuICAgICAgICA3NixcbiAgICAgICAgMjAzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDMsXG4gICAgICAgIDExMixcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MixcbiAgICAgICAgNzcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxODUsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDgyLFxuICAgICAgICA2NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDU1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDksXG4gICAgICAgIDMxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTgwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA5MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4LFxuICAgICAgICA3MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYwLFxuICAgICAgICA1NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQsXG4gICAgICAgIDIzLFxuICAgICAgICA0OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODAsXG4gICAgICAgIDgyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDM1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjE5LFxuICAgICAgICA2MixcbiAgICAgICAgNzEsXG4gICAgICAgIDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNGhUL0JBeGhtclRKaFBHWlhZejVhT3VhU2YwWlg0NWJyamVROVN4aHdXZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzNDk4NTIyODVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjFGOEIxRjJBRkVFMEM1REFDMjMyOEI3MzAzNzQzQUYwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDE1NTc2OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzM0OTg1MjI4NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzAyMDVCRUI5MjI5MTk0RUIwREVERDQ5N0Y1NDJFOENcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMTU1NzY4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInlOQjVVSDdCUTAtOEVrbmFLWjViVkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjIyZWVhNzctOTA2ZS00YzE1LTkyYTYtYzY4ZDYxYTBkNzZkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MixcbiAgICAgIDY0LFxuICAgICAgMTQwLFxuICAgICAgMTY3LFxuICAgICAgOTEsXG4gICAgICAyNixcbiAgICAgIDM0LFxuICAgICAgMTE3LFxuICAgICAgOTcsXG4gICAgICAyNTIsXG4gICAgICA4MSxcbiAgICAgIDcwLFxuICAgICAgMTEsXG4gICAgICAyNixcbiAgICAgIDE1NSxcbiAgICAgIDMwLFxuICAgICAgMTA0LFxuICAgICAgMjEyLFxuICAgICAgMTQwLFxuICAgICAgMTY0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzOSxcbiAgICAgIDEzNSxcbiAgICAgIDE3MixcbiAgICAgIDEwMCxcbiAgICAgIDExMyxcbiAgICAgIDIyMyxcbiAgICAgIDIxNixcbiAgICAgIDIxLFxuICAgICAgMTc3LFxuICAgICAgMTI5LFxuICAgICAgNTYsXG4gICAgICAxMTIsXG4gICAgICAxNTQsXG4gICAgICAyOCxcbiAgICAgIDI1MCxcbiAgICAgIDc1LFxuICAgICAgMjM5LFxuICAgICAgOSxcbiAgICAgIDE2LFxuICAgICAgMTEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIko4UDdCQkZaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzNDk4NTIyODU6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIiFCaWxhbCBBaG1hZCB+XCIsXG4gICAgXCJsaWRcIjogXCIyMjg1MzU0NzgyOTI1Nzk6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKR1J1bzBGRVBIOG5iUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInRvMmxIcGp6WUVpVXMyeGsxcjVHVGJIRGlTQ0h6OXBmY1lIcE9OOHNpbnc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUVlGaGFhZUJ3Wkw3enB5UkJLSkMwYUh4SmJLRE1FRCtoaVNyZ0ZCZ0lUNUV0QjZKQWN0dk50QnJHZ1NSVXZoaVJFZWprdHFNeVEvTHlXVnhJdEk2QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibGJZRmVJVFVPdjJZNzNGaDhJS1cvQklSQmVheWFYemRjUm1TSDlDOTVQODNaTDJ6TURBNXhSc2Q2ek4yR2tOOEFLd3FMazFEMkFiNzJ1TENHRG02aUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzQ5ODUyMjg1OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAxNTU3NjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLZ1ZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtnVi5qc29uIjogIntcImtleURhdGFcIjpcIkc4cFkzRmlnTGZHSXVHN2xPZkRBeWZwL2xIWVJac1RDRmJ1bkNqd0o3MFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM3MDM5MjcyMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwMTU1NzY2ODQ5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Bilal",


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
