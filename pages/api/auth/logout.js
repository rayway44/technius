const cookie = require('cookie')

export default (req, res) => {
    const tokensToSet = [
        cookie.serialize('access-token', '', {
            httpOnly: true,
            sameSite: true,
            maxAge: 0,
            path:'/'
        })
    ]
    
    res.setHeader('Set-Cookie', tokensToSet);

    return res.send('logged out')
}