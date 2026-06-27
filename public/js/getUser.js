export default ([ cookie, socket, loadState, router, redirect ]) => {
    const userButtons = document.getElementsByClassName('user-button-image')
    const localUser = require('../../lib/data').user
    const language = document.URL.replace('https://', '').replace('http://', '').split('/')[1]
    let loadingControl = true

    
    loadState(
        {
            avatarURL: "https://a.png",
            tag: "cogu",
            username: "cogu",
            guilds: [
                {
                    DBGuild:{
                        _id: 12,
                    },
                    id: 12,
                    name: "test"
                },
                {
                    DBGuild:{
                        _id: 123,
                    },
                    id: 123,
                    name: "test-1"
                },
                {
                    DBGuild:{
                        _id: 1233,
                    },
                    id: 1233,
                    name: "test-2"
                },
                {
                    DBGuild:{
                        _id: 12333,
                    },
                    id: 12333,
                    name: "test-3"
                },
            ]
        },
        false
    )
    /* 

    function configureUser() {
        let user = {
            avatarURL: "https://a.png",
            tag: "cogu",
            username: "cogu",
            guilds: [
                {
                    id: 12,
                    name: "test"
                }
            ]
        }
        if (loadState) {
            loadState(user, true)
        }
        return
        //for (let i in user.guilds) user.guilds[i].DBGuild = null

        /*socket.emit('dashboard', {
            type: 'get-guilds',
            guilds: user.guilds,
            user
        })

        socket.on('dashboard-guilds-return', (props, noUserConfig) => {
            if (noUserConfig) return;
            if ((!props || props.length <= 0) && loadState) return loadState(user, true)

            for (let i in props) {
                let guild = user.guilds.find(g => g.id == props[i].DBGuild._id)
                guild.DBGuild = props[i].DBGuild || false
                guild.channels = props[i].channels

                if (user.guilds.map(g => g.DBGuild).filter(g => g).length >= Number(i)+1 && loadingControl && loadState) {
                    loadState(user, true)
                    loadingControl = false
                }
            }
        })
    }

    if (localUser.id) configureUser(localUser)
    else if (cookie.userId) {
        console.log(cookie)
        socket.emit('search-user-for-cookie', cookie);

        socket.on('cookie-response-success', (user) => {
            console.log('response-success')        
            if (user && loadingControl) configureUser(user)
            else for (let i in cookie) document.cookie = `${i}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
        })

        socket.on('cookie-response-failure', () => {
            console.log('response-failure')        
            for (let i in cookie) document.cookie = `${i}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
            if (redirect) router.push(`/${language}/auth`)
        })
    } else if (redirect) router.push(`/${language}/auth`) */
}