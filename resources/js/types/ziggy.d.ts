/* This file is generated by Ziggy. */
declare module 'ziggy-js' {
  interface RouteList {
    "dusk.login": [
        {
            "name": "userId",
            "required": true
        },
        {
            "name": "guard",
            "required": false
        }
    ],
    "dusk.logout": [
        {
            "name": "guard",
            "required": false
        }
    ],
    "dusk.user": [
        {
            "name": "guard",
            "required": false
        }
    ],
    "sanctum.csrf-cookie": [],
    "ignition.healthCheck": [],
    "ignition.executeSolution": [],
    "ignition.updateConfig": [],
    "dashboard": [],
    "profile.edit": [],
    "profile.update": [],
    "profile.destroy": [],
    "module-list": [],
    "page404": [],
    "register": [],
    "login": [],
    "password.request": [],
    "password.email": [],
    "password.reset": [
        {
            "name": "token",
            "required": true
        }
    ],
    "password.store": [],
    "verification.notice": [],
    "verification.verify": [
        {
            "name": "id",
            "required": true
        },
        {
            "name": "hash",
            "required": true
        }
    ],
    "verification.send": [],
    "password.confirm": [],
    "password.update": [],
    "logout": []
}
}
export {};
