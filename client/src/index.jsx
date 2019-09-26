import React from "react";
import ReactDOM from "react-dom";

import Comp from './comp.jsx';
import VidSelect from './vidSelect.jsx';
import Screen from './screen.jsx';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            vids : [
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/TLfyXhN13TDH7HfI2AQsxZAdS20\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "3k2PVBl6kKA"
                    },
                    "snippet": {
                        "publishedAt": "2013-05-16T06:23:25.000Z",
                        "channelId": "UCQLHU5MVfMo-wZJn8kGokbw",
                        "title": "ShivCom",
                        "description": "Shivs are the best way to play xcom -- www.twitch.tv/mikelat/c/2290106&utm_campaign=archive_export&utm_source=mikelat&utm_medium=youtube follow me: ...",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/3k2PVBl6kKA/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/3k2PVBl6kKA/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/3k2PVBl6kKA/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "mikelat",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/BKsBGbm2gb6usqVKPDiAmrTo6G0\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "cxEN0e3mdt4"
                    },
                    "snippet": {
                        "publishedAt": "2016-02-02T19:50:49.000Z",
                        "channelId": "UCIFjQS1xlwRS-6u3d9jabhw",
                        "title": "XCOM:EW SHIV Army Highlights",
                        "description": "I been sitting on this large collection of stream clips for a long time (like 18 months) and with XCOM 2 coming out in a few days, I figured I better just throw them ...",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/cxEN0e3mdt4/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/cxEN0e3mdt4/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/cxEN0e3mdt4/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "Smight",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/toBrlFtv6GOhdO8YMpvWWm546ag\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "AmVvbjAgAtQ"
                    },
                    "snippet": {
                        "publishedAt": "2012-10-13T21:03:33.000Z",
                        "channelId": "UCB-RtnF3Q9OdEoFHXMqQixA",
                        "title": "Xcom Enemy Unknown Basic SHIV",
                        "description": "just the basic SHIV in action against some aliens.",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/AmVvbjAgAtQ/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/AmVvbjAgAtQ/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/AmVvbjAgAtQ/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "sithalo",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/Laqm8YvvMEX_A6XMMHplmCQWxzw\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "zhBf_1He4hw"
                    },
                    "snippet": {
                        "publishedAt": "2014-07-13T05:10:12.000Z",
                        "channelId": "UCR9SOXQs_63t9xS7GMdkhcg",
                        "title": "XCOM Ending with All SHIVs",
                        "description": "",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/zhBf_1He4hw/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/zhBf_1He4hw/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/zhBf_1He4hw/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "Bender Rodriguez",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/k_cMqqGHe8AMBbtAEoPizheKJE4\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "QzRmpTWQCm0"
                    },
                    "snippet": {
                        "publishedAt": "2014-07-28T17:08:11.000Z",
                        "channelId": "UCybHbFKXRta-p7XZqQMZpEA",
                        "title": "[SFM] XCOM Shiv animation test",
                        "description": "So i got bored and decided to check the workshop for more goodies and what do you know the XCOM stuff hooray. And before someone says \"SHIV doesn't fire ...",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/QzRmpTWQCm0/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/QzRmpTWQCm0/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/QzRmpTWQCm0/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "Sergeant Hastagazpacho",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/x09CoRZ5f9KAMXZxuARt9IfhV7g\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "pBk1fHFPUU0"
                    },
                    "snippet": {
                        "publishedAt": "2012-10-31T08:25:02.000Z",
                        "channelId": "UClZFLrMo2jbcfTB6AuacQrA",
                        "title": "X-Com Enemy Unknown Gameplay 6 Alloy S.H.I.V. Team Assult Downed UFO",
                        "description": "I thought I would have some fun with some Alloy SHIV's. So I mounted plasma weapons on them and sent them on a mission.",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/pBk1fHFPUU0/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/pBk1fHFPUU0/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/pBk1fHFPUU0/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "Nuke4Prez",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/SBAP0zFA4cQhivcKOmoCCn8oUaw\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "uhlSk2KU7i4"
                    },
                    "snippet": {
                        "publishedAt": "2013-12-02T12:41:07.000Z",
                        "channelId": "UCzdW1mYfL87V8AY3v9KYuzg",
                        "title": "XCOM: Enemy Within - MEC Guide",
                        "description": "Here is a straightforward guide (with commentary) on the MECs (Mechanized Exoskeletal Cybersuits) for XCOM: Enemy Within just for you! If there's any details I ...",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/uhlSk2KU7i4/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/uhlSk2KU7i4/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/uhlSk2KU7i4/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "Caedo Genesis",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/zK8VWH8R-9aBBGdszgG_ZrkMneY\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "XiyfoyIt_oE"
                    },
                    "snippet": {
                        "publishedAt": "2013-11-03T14:47:25.000Z",
                        "channelId": "UCWjW5G2OYkHHM5Q1RsvzH8A",
                        "title": "XCOM: Enemy Unknown| First Ethereal encounter| Hover S.H.I.V. only",
                        "description": "The audio is a bit buggy for the first 40 sec. Recording of me doing the \"Overseer Crash Site\" mission. Also \"Rift\" is OP. Thought \"Robotic\" would make them ...",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/XiyfoyIt_oE/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/XiyfoyIt_oE/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/XiyfoyIt_oE/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "munelo1",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/DAzpz49w1pyCuuoULukBL_c9wTM\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "IGPCNHbmNFE"
                    },
                    "snippet": {
                        "publishedAt": "2015-11-12T20:00:00.000Z",
                        "channelId": "UCW6YgEKN3RGtK4JW8cymvaw",
                        "title": "XCOM SHIV extra (#39.5) - Terror mission bits",
                        "description": "Link to vid #40: https://youtu.be/Vm6e8u43Sxg) The recording for this mission failed. I redid a small part of it to test new settings and uploaded it for your ...",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/IGPCNHbmNFE/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/IGPCNHbmNFE/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/IGPCNHbmNFE/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "GeordyJones",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/CKjGX83LmMwahbrhvc8JpcSoOxY\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "zlYkta69sQQ"
                    },
                    "snippet": {
                        "publishedAt": "2019-02-08T02:13:23.000Z",
                        "channelId": "UCNnpWz-bqmXkFHaSl82NIdw",
                        "title": "XCOM Enemy Within S.H.I.V. Challenge",
                        "description": "19II Mode: Impossible with Ironman and 19 from 21 second Wave Options enabled (no Marathon, no Alternate Sources). Challenge starts at 08:35 Hope you like ...",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/zlYkta69sQQ/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/zlYkta69sQQ/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/zlYkta69sQQ/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "Metamaurus",
                        "liveBroadcastContent": "none"
                    }
                }
            ]
        };
    }

    render(){
        return(
            <div id="main">
                <Comp/>
                <Screen vid={this.state.vids[3]}/>
                <VidSelect vids={this.state.vids}/>
            </div>
        )
    }

}

ReactDOM.render(<App/>, document.getElementById("app"));