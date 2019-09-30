import React from "react";
import ReactDOM from "react-dom";

import Search from './search.jsx';
import VidSelect from './vidSelect.jsx';
import Screen from './screen.jsx';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            vids : [
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/ZlqzJ3u_hUYGVoINLQUxoAdUQ0A\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "9zfeTw-uFCw"
                    },
                    "snippet": {
                        "publishedAt": "2016-07-29T13:46:30.000Z",
                        "channelId": "UCvjgXvBlbQiydffZU7m1_aw",
                        "title": "9.1: Genetic Algorithm: Introduction - The Nature of Code",
                        "description": "Welcome to part 1 of a new series of videos focused on Evolutionary Computing, and more specifically, Genetic Algorithms. In this tutorial, I introduce the ...",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/9zfeTw-uFCw/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/9zfeTw-uFCw/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/9zfeTw-uFCw/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "The Coding Train",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/LJovh7dZvusfiLSxjfNzLruz4z4\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "kHyNqSnzP8Y"
                    },
                    "snippet": {
                        "publishedAt": "2014-01-10T19:40:36.000Z",
                        "channelId": "UCEBb1b_L6zDS3xTUrIALZOw",
                        "title": "13. Learning: Genetic Algorithms",
                        "description": "MIT 6.034 Artificial Intelligence, Fall 2010 View the complete course: http://ocw.mit.edu/6-034F10 Instructor: Patrick Winston This lecture explores genetic ...",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/kHyNqSnzP8Y/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/kHyNqSnzP8Y/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/kHyNqSnzP8Y/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "MIT OpenCourseWare",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/YdoxIAabBydkk0ZudDLdKhnkpnY\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "0ZGbIKd0XrM"
                    },
                    "snippet": {
                        "publishedAt": "2018-11-15T06:14:20.000Z",
                        "channelId": "UCKzJFdi57J53Vr_BkTfN3uQ",
                        "title": "Simulating Natural Selection",
                        "description": "In this video, we avoid telling the creatures what their survival chances are and let them figure it out themselves. This is the fifth in the series on evolution.",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/0ZGbIKd0XrM/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/0ZGbIKd0XrM/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/0ZGbIKd0XrM/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "Primer",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/0LHAWdcCMepWCkCBWukjQt3z7Jw\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "VnwjxityDLQ"
                    },
                    "snippet": {
                        "publishedAt": "2018-05-08T01:44:54.000Z",
                        "channelId": "UC0e3QhIYukixgh5VVpKHH9Q",
                        "title": "How Artificial intelligence learns | Genetic Algorithm explained",
                        "description": "Evolution has crafted the most intelligent beings on earth. In this video I explain how computer scientists simulate evolution to train or evolve AI. Become a ...",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/VnwjxityDLQ/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/VnwjxityDLQ/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/VnwjxityDLQ/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "Code Bullet",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/stVhaldkH3NZCJgVKW5BmPyJSHQ\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "rGWBo0JGf50"
                    },
                    "snippet": {
                        "publishedAt": "2017-08-16T14:54:05.000Z",
                        "channelId": "UCWN3xxRkmTPmbKwht9FuE5A",
                        "title": "Genetic Algorithm in Artificial Intelligence - The Math of Intelligence (Week 9)",
                        "description": "Evolutionary/genetic algorithms are somewhat of a mystery to many in the machine learning discipline. You don't see papers regularly published using them but ...",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/rGWBo0JGf50/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/rGWBo0JGf50/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/rGWBo0JGf50/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "Siraj Raval",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/6RSTVcmzeVFufzeYbgHdVxcVo7U\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "1i8muvzZkPw"
                    },
                    "snippet": {
                        "publishedAt": "2015-09-23T14:48:12.000Z",
                        "channelId": "UCgdHSFcXvkN6O3NXvif0-pA",
                        "title": "What is a Genetic Algorithm",
                        "description": "Get an introduction to the components of a genetic algorithm. Get a Free MATLAB Trial: https://goo.gl/C2Y9A5 Ready to Buy: https://goo.gl/vsIeA5 Learn more ...",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/1i8muvzZkPw/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/1i8muvzZkPw/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/1i8muvzZkPw/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "MATLAB",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/X20D2P97l8gkCMOLK1-bLst39IA\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "qv6UVOQ0F44"
                    },
                    "snippet": {
                        "publishedAt": "2015-06-13T19:00:01.000Z",
                        "channelId": "UC8aG3LDTDwNR1UQhSn9uVrw",
                        "title": "MarI/O - Machine Learning for Video Games",
                        "description": "MarI/O is a program made of neural networks and genetic algorithms that kicks butt at Super Mario World. Source Code: http://pastebin.com/ZZmSNaHX \"NEAT\" ...",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/qv6UVOQ0F44/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/qv6UVOQ0F44/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/qv6UVOQ0F44/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "SethBling",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/ajd5tF1y0d0f5wQCPm90ogBt0QE\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "FwPgHgbncPk"
                    },
                    "snippet": {
                        "publishedAt": "2017-12-09T04:50:51.000Z",
                        "channelId": "UCQA9tK0nRK1e_Bqg0uETs8A",
                        "title": "genetic algorithm in artificial intelligence | genetic algorithm in hindi | Artificial intelligence",
                        "description": "Hey friends welcome to well academy here is the topic genetic algorithm in artificial intelligence in hindi DBMS Gate Lectures Full Course FREE Playlist ...",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/FwPgHgbncPk/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/FwPgHgbncPk/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/FwPgHgbncPk/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "Well Academy",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/EDj6_Sehg_tvp_oBxtaS___TxoA\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "3bhP7zulFfY"
                    },
                    "snippet": {
                        "publishedAt": "2017-12-08T03:54:14.000Z",
                        "channelId": "UC0e3QhIYukixgh5VVpKHH9Q",
                        "title": "AI learns to play snake using Genetic Algorithm and Deep learning",
                        "description": "Using a neural network and the genetic algorithm I trained an AI to play snake. Time Passing By by Audionautix is licensed under a Creative Commons ...",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/3bhP7zulFfY/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/3bhP7zulFfY/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/3bhP7zulFfY/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "Code Bullet",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/h7QMmGRWLc9bu1G5ibXpGGL7ld0\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "FKbarpAlBkw"
                    },
                    "snippet": {
                        "publishedAt": "2017-06-06T17:54:41.000Z",
                        "channelId": "UCpaYBhIOfgZheOTdL7indOA",
                        "title": "Genetic algorithms - evolution of a 2D car in Unity",
                        "description": "Example of application of genetic algorithm for evolution of a 2d car. Made in unity. Music: https://www.youtube.com/watch?v=B4K7Hqv4vts.",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/FKbarpAlBkw/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/FKbarpAlBkw/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/FKbarpAlBkw/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "Tomek S",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/H3HMQReUyCj4cNQADJSKqfwsM4k\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "cxweR4i0ejA"
                    },
                    "snippet": {
                        "publishedAt": "2016-10-23T22:12:37.000Z",
                        "channelId": "UCA7h09UspLXvY2G7kjMKRgw",
                        "title": "Genetic Algorithm Explanation",
                        "description": "(Summary) Genetic Algorithm: Why? A lot of data has to be analysed and it's not possible to check every possibility. A faster way to find solutions to problems is ...",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/cxweR4i0ejA/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/cxweR4i0ejA/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/cxweR4i0ejA/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "David Stepanov",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/irvOy5HLEeQ6kAxuSEEK7Vu1X-w\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "uCXm6avugCo"
                    },
                    "snippet": {
                        "publishedAt": "2018-04-15T21:24:40.000Z",
                        "channelId": "UCnE8sAcJ-x1ttDcYPqoAdOg",
                        "title": "Genetic Algorithm from Scratch in Python -- Full Walkthrough",
                        "description": "This is a response to a question I got about how the genetic algorithm works... so I took a Saturday morning and just coded one up from scratch. This project ...",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/uCXm6avugCo/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/uCXm6avugCo/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/uCXm6avugCo/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "The Real GM",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/vcujVI82qcgvbBxQuu7ecr4NBSw\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "XP8R0yzAbdo"
                    },
                    "snippet": {
                        "publishedAt": "2017-06-14T19:36:50.000Z",
                        "channelId": "UCjFO5t0MLyQaidKGpGoRewg",
                        "title": "Genetic Algorithm Tutorial - How to Code a Genetic Algorithm",
                        "description": "Learn more advanced front-end and full-stack development at: https://www.fullstackacademy.com In this video, Patrick walks through his implementation of a ...",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/XP8R0yzAbdo/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/XP8R0yzAbdo/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/XP8R0yzAbdo/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "Fullstack Academy",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/iHxwWAesMnjkhgFSuHmRhgNMlvU\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "XcinBPhgT7M"
                    },
                    "snippet": {
                        "publishedAt": "2017-02-25T14:05:59.000Z",
                        "channelId": "UCVmM1gXqzBhDNnkwkIR1xeA",
                        "title": "Genetic Algorithm Example",
                        "description": "This is just an example of Genetic Algorithm implementation. More detailed explanation and code: The \"snakes\" are made of 25 segments each. The solution ...",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/XcinBPhgT7M/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/XcinBPhgT7M/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/XcinBPhgT7M/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "Goran Muric",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/HJeQqRC7xC6KmCWxFh1xjaXud_E\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "jBz9BUCMPB4"
                    },
                    "snippet": {
                        "publishedAt": "2018-09-06T18:22:44.000Z",
                        "channelId": "UCUgiLfPu3L5EFTRTRkqLsKw",
                        "title": "AI birds learn to fly - Genetic Algorithm",
                        "description": "I created this simple genetic algorithm using swift. I left it running for about an hour and the results seemed pretty good. Here are a few additional details not ...",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/jBz9BUCMPB4/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/jBz9BUCMPB4/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/jBz9BUCMPB4/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "Mark Bushby",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/Squ4LuCdTApQyxJTPtuPrqAUk_E\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "swAIhqfICvE"
                    },
                    "snippet": {
                        "publishedAt": "2019-03-27T02:23:14.000Z",
                        "channelId": "UCWUcnan8-wX2akW7aEPNvVg",
                        "title": "Multi-objecitive Genetic Algorithm (MOGA)",
                        "description": "A multiobjective genetic algorithm (MOGA) is a modification of the GA at the selection level.",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/swAIhqfICvE/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/swAIhqfICvE/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/swAIhqfICvE/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "StudyKorner",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/dd7rMjxojwxE7_KlS23XFYHK_4Y\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "96-u9s6D16k"
                    },
                    "snippet": {
                        "publishedAt": "2019-06-14T09:27:51.000Z",
                        "channelId": "UCJihyK0A38SZ6SdJirEdIOw",
                        "title": "Genetic Algorithm in Artificial Intelligence in Hindi | Simplest Explanation with real life examples",
                        "description": "Link for AI Playlist: https://www.youtube.com/watch?v=uB3i-qV6VdM&list=PLxCzCOWd7aiHGhOHV-nwb0HR5US5GFKFI #GeneticAlgorithm#AI.",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/96-u9s6D16k/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/96-u9s6D16k/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/96-u9s6D16k/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "Gate Smashers",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/mCKywQdjfBN68g9taiifsFRxH3w\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "Gl3EjiVlz_4"
                    },
                    "snippet": {
                        "publishedAt": "2014-02-06T17:41:12.000Z",
                        "channelId": "UCieZ1-0Zh_eisR6itqhoL4A",
                        "title": "Genetic algorithm. Learning to jump over ball.",
                        "description": "Automated design of motion strategy using genetic algorithm and neural network. Learning simple creature to jump over ball.",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/Gl3EjiVlz_4/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/Gl3EjiVlz_4/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/Gl3EjiVlz_4/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "AKUKamil",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/tiahC-j6tCC9anFycc8ndrS--Qg\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "G8KJWONEeGo"
                    },
                    "snippet": {
                        "publishedAt": "2017-06-05T13:54:38.000Z",
                        "channelId": "UCOM0GGMEcu-gyf4F1mT7A8Q",
                        "title": "Genetic Algorithm C# - Generic Implementation",
                        "description": "Implementation of a Genetic Algorithm in C#, using the Unity game engine to demonstrate the algorithm in action. In this video we cover the base implementation ...",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/G8KJWONEeGo/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/G8KJWONEeGo/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/G8KJWONEeGo/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "Kryzarel",
                        "liveBroadcastContent": "none"
                    }
                },
                {
                    "kind": "youtube#searchResult",
                    "etag": "\"p4VTdlkQv3HQeTEaXgvLePAydmU/8GfLnBD8iFxvs7zd5SBScsmHG2k\"",
                    "id": {
                        "kind": "youtube#video",
                        "videoId": "bGz7mv2vD6g"
                    },
                    "snippet": {
                        "publishedAt": "2016-08-02T14:24:01.000Z",
                        "channelId": "UCvjgXvBlbQiydffZU7m1_aw",
                        "title": "Coding Challenge #29: Smart Rockets in p5.js",
                        "description": "In this (very long) Coding Challenge, I implement a genetic algorithm from scratch and create \"smart rockets\" (based on a simulation by Jer Thorp). The rockets ...",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/bGz7mv2vD6g/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/bGz7mv2vD6g/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/bGz7mv2vD6g/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "The Coding Train",
                        "liveBroadcastContent": "none"
                    }
                }
            ],
            watching: {
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
            watchID : 0
        };
        this.updateVids = this.updateVids.bind(this);
        this.playNewVid = this.playNewVid.bind(this);
    }

    render(){
        return(
            <div id="main">
                <Search updateVids={this.updateVids}/>
                <div id='bigFlex'>
                    <Screen vid={this.state.vids[this.state.watchID]/*this.state.watching*/}/>
                    <VidSelect vids={this.state.vids} playNewVid={this.playNewVid}/>
                </div>
            </div>
        )
    }

    updateVids(newVids){
        // console.log('reached updateVids');
        this.setState({vids: newVids});
    }

    playNewVid(vidID){
        if(this.state.watchID !== vidID){
            this.setState({watchID: vidID});
        }
    }

}

ReactDOM.render(<App/>, document.getElementById("app"));