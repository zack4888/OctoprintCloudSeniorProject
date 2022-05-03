[
    {
        "id": "ee94202f9aa3429c",
        "type": "tab",
        "label": "Flow 1",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "23783782221b52f8",
        "type": "mqtt in",
        "z": "ee94202f9aa3429c",
        "name": "",
        "topic": "/octoprint",
        "qos": "2",
        "datatype": "auto",
        "broker": "df2839daa12c449a",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 440,
        "y": 140,
        "wires": [
            [
                "d4d863f711edbd2b"
            ]
        ]
    },
    {
        "id": "6d87dfa566b9e808",
        "type": "mqtt out",
        "z": "ee94202f9aa3429c",
        "name": "",
        "topic": "octoPrint/subscribe/",
        "qos": "0",
        "retain": "false",
        "respTopic": "",
        "contentType": "",
        "userProps": "",
        "correl": "",
        "expiry": "",
        "broker": "df2839daa12c449a",
        "x": 560,
        "y": 300,
        "wires": []
    },
    {
        "id": "2566b4f8f46b7480",
        "type": "inject",
        "z": "ee94202f9aa3429c",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "This is a test ",
        "payloadType": "str",
        "x": 250,
        "y": 300,
        "wires": [
            [
                "6d87dfa566b9e808"
            ]
        ]
    },
    {
        "id": "d4d863f711edbd2b",
        "type": "debug",
        "z": "ee94202f9aa3429c",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 710,
        "y": 140,
        "wires": []
    },
    {
        "id": "5013889c37c91459",
        "type": "mqtt in",
        "z": "ee94202f9aa3429c",
        "name": "",
        "topic": "octoPrint/temperature/tool0",
        "qos": "0",
        "datatype": "json",
        "broker": "df2839daa12c449a",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 320,
        "y": 480,
        "wires": [
            [
                "bcf196e4bee7a59f",
                "d4d0fc1cacb2a916"
            ]
        ]
    },
    {
        "id": "bcf196e4bee7a59f",
        "type": "debug",
        "z": "ee94202f9aa3429c",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 610,
        "y": 480,
        "wires": []
    },
    {
        "id": "b1491cd839a409f1",
        "type": "mqtt in",
        "z": "ee94202f9aa3429c",
        "name": "",
        "topic": "octoPrint/temperature/bed",
        "qos": "0",
        "datatype": "json",
        "broker": "df2839daa12c449a",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 270,
        "y": 600,
        "wires": [
            [
                "80ca5b4f700e74dd",
                "5a3e22188d665806"
            ]
        ]
    },
    {
        "id": "80ca5b4f700e74dd",
        "type": "debug",
        "z": "ee94202f9aa3429c",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 570,
        "y": 600,
        "wires": []
    },
    {
        "id": "0203ca7b8c38a7f2",
        "type": "mqtt in",
        "z": "ee94202f9aa3429c",
        "name": "",
        "topic": "octoPrint/mqtt",
        "qos": "0",
        "datatype": "auto",
        "broker": "df2839daa12c449a",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 190,
        "y": 700,
        "wires": [
            [
                "cbbf168510271b78",
                "704712b84dcd4146",
                "bf3d34500effe11f"
            ]
        ]
    },
    {
        "id": "cbbf168510271b78",
        "type": "debug",
        "z": "ee94202f9aa3429c",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 530,
        "y": 700,
        "wires": []
    },
    {
        "id": "8caf2c8e1a522c09",
        "type": "mqtt out",
        "z": "ee94202f9aa3429c",
        "name": "",
        "topic": "octoPrint/temperature/tool0",
        "qos": "2",
        "retain": "",
        "respTopic": "",
        "contentType": "",
        "userProps": "",
        "correl": "",
        "expiry": "",
        "broker": "df2839daa12c449a",
        "x": 560,
        "y": 380,
        "wires": []
    },
    {
        "id": "c896ad1048756fb2",
        "type": "inject",
        "z": "ee94202f9aa3429c",
        "name": "",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "{\"_timestamp\": 1517190629, \"actual\": 65.3, \"target\": 210.0}",
        "payloadType": "json",
        "x": 210,
        "y": 380,
        "wires": [
            [
                "8caf2c8e1a522c09"
            ]
        ]
    },
    {
        "id": "877b1ff8a2960262",
        "type": "mqtt in",
        "z": "ee94202f9aa3429c",
        "name": "",
        "topic": "octoPrint/subscribe/",
        "qos": "0",
        "datatype": "auto",
        "broker": "df2839daa12c449a",
        "nl": false,
        "rap": true,
        "rh": 0,
        "inputs": 0,
        "x": 210,
        "y": 900,
        "wires": [
            [
                "5846596fbe5741ea"
            ]
        ]
    },
    {
        "id": "5846596fbe5741ea",
        "type": "debug",
        "z": "ee94202f9aa3429c",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 530,
        "y": 900,
        "wires": []
    },
    {
        "id": "a33224c1.933d3",
        "type": "change",
        "z": "ee94202f9aa3429c",
        "name": "webcam stream",
        "rules": [
            {
                "t": "set",
                "p": "src",
                "pt": "msg",
                "to": "http://192.168.1.10/webcam/?action=stream",
                "tot": "str"
            },
            {
                "t": "set",
                "p": "mimetype",
                "pt": "msg",
                "to": "image/jpeg",
                "tot": "str"
            }
        ],
        "action": "",
        "property": "",
        "from": "",
        "to": "",
        "reg": false,
        "x": 360,
        "y": 1020,
        "wires": [
            [
                "a4d7d07d.0da0f"
            ]
        ]
    },
    {
        "id": "4bf79234bc5c626a",
        "type": "mqtt out",
        "z": "ee94202f9aa3429c",
        "name": "",
        "topic": "octoPrint/subscribe/",
        "qos": "0",
        "retain": "false",
        "respTopic": "",
        "contentType": "",
        "userProps": "",
        "correl": "",
        "expiry": "",
        "broker": "df2839daa12c449a",
        "x": 560,
        "y": 1100,
        "wires": []
    },
    {
        "id": "bf3d34500effe11f",
        "type": "switch",
        "z": "ee94202f9aa3429c",
        "name": "",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "disconnected",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "repair": false,
        "outputs": 1,
        "x": 370,
        "y": 800,
        "wires": [
            [
                "db9256a59d598134"
            ]
        ]
    },
    {
        "id": "db9256a59d598134",
        "type": "trigger",
        "z": "ee94202f9aa3429c",
        "name": "",
        "op1": "N/A",
        "op2": "0",
        "op1type": "str",
        "op2type": "str",
        "duration": "0",
        "extend": false,
        "overrideDelay": false,
        "units": "ms",
        "reset": "",
        "bytopic": "all",
        "topic": "topic",
        "outputs": 1,
        "x": 540,
        "y": 800,
        "wires": [
            [
                "d4d0fc1cacb2a916",
                "5a3e22188d665806"
            ]
        ]
    },
    {
        "id": "7b560adc.3ba774",
        "type": "ui_button",
        "z": "ee94202f9aa3429c",
        "name": "",
        "group": "0a53b0e8032ec35f",
        "order": 3,
        "width": 0,
        "height": 0,
        "passthru": true,
        "label": "Connect Webcam",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "className": "",
        "icon": "fa-video-camera",
        "payload": "",
        "payloadType": "str",
        "topic": "",
        "topicType": "str",
        "x": 150,
        "y": 1020,
        "wires": [
            [
                "a33224c1.933d3"
            ]
        ]
    },
    {
        "id": "11f5f18769a4e2f9",
        "type": "ui_button",
        "z": "ee94202f9aa3429c",
        "name": "",
        "group": "0a53b0e8032ec35f",
        "order": 4,
        "width": 0,
        "height": 0,
        "passthru": false,
        "label": "Cancel print",
        "tooltip": "",
        "color": "",
        "bgcolor": "",
        "className": "",
        "icon": "",
        "payload": "Cancel",
        "payloadType": "str",
        "topic": "topic",
        "topicType": "msg",
        "x": 290,
        "y": 1100,
        "wires": [
            [
                "4bf79234bc5c626a"
            ]
        ]
    },
    {
        "id": "d4d0fc1cacb2a916",
        "type": "ui_text",
        "z": "ee94202f9aa3429c",
        "group": "0a53b0e8032ec35f",
        "order": 5,
        "width": "3",
        "height": "2",
        "name": "",
        "label": "Tool temp",
        "format": "Actual: {{msg.payload.actual}}°C<br>Target: {{msg.payload.target}}°C",
        "layout": "col-center",
        "className": "",
        "x": 880,
        "y": 560,
        "wires": []
    },
    {
        "id": "5a3e22188d665806",
        "type": "ui_text",
        "z": "ee94202f9aa3429c",
        "group": "0a53b0e8032ec35f",
        "order": 6,
        "width": "3",
        "height": "2",
        "name": "",
        "label": "Bed temp",
        "format": "Actual: {{msg.payload.actual}}°C<br>Target: {{msg.payload.target}}°C",
        "layout": "col-center",
        "className": "",
        "x": 920,
        "y": 640,
        "wires": []
    },
    {
        "id": "704712b84dcd4146",
        "type": "ui_text",
        "z": "ee94202f9aa3429c",
        "group": "0a53b0e8032ec35f",
        "order": 1,
        "width": 0,
        "height": 0,
        "name": "",
        "label": "Printer Connection Status:",
        "format": "{{msg.payload}}",
        "layout": "row-spread",
        "className": "",
        "x": 440,
        "y": 740,
        "wires": []
    },
    {
        "id": "a4d7d07d.0da0f",
        "type": "ui_media",
        "z": "ee94202f9aa3429c",
        "group": "0a53b0e8032ec35f",
        "name": "",
        "width": "10",
        "height": "7",
        "order": 2,
        "category": "",
        "file": "",
        "layout": "center",
        "showcontrols": true,
        "loop": true,
        "onstart": true,
        "scope": "local",
        "tooltip": "",
        "x": 550,
        "y": 1020,
        "wires": [
            []
        ]
    },
    {
        "id": "df2839daa12c449a",
        "type": "mqtt-broker",
        "name": "",
        "broker": "192.168.56.104",
        "port": "1883",
        "clientid": "",
        "autoConnect": true,
        "usetls": false,
        "protocolVersion": "4",
        "keepalive": "60",
        "cleansession": true,
        "birthTopic": "",
        "birthQos": "0",
        "birthPayload": "",
        "birthMsg": {},
        "closeTopic": "",
        "closeQos": "0",
        "closePayload": "",
        "closeMsg": {},
        "willTopic": "",
        "willQos": "0",
        "willPayload": "",
        "willMsg": {},
        "sessionExpiry": ""
    },
    {
        "id": "0a53b0e8032ec35f",
        "type": "ui_group",
        "name": "Octoprint",
        "tab": "4eb00ff010171352",
        "order": 1,
        "disp": true,
        "width": "13",
        "collapse": false,
        "className": ""
    },
    {
        "id": "4eb00ff010171352",
        "type": "ui_tab",
        "name": "Test",
        "icon": "dashboard",
        "disabled": false,
        "hidden": false
    }
]
