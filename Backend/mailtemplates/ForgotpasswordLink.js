exports.forgotpasswordtemplate=(email,link)=>{
    return `<DOCTYPE html>
    <html>
        <head>

        
        </head>


        <body>
            
            <div class='sugg'>forgot password link is requested from email id ${email}</div>
            <div class='otp'>click on the link to set new password </div>
            <a href=${link}>click here ${link}</a>
        </body>
    </html>
    `
}