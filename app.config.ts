import { defineConfig } from "@solidjs/start/config";
import { createWithSolidBase, defineTheme } from "@kobalte/solidbase/config";
import defaultTheme from "@kobalte/solidbase/default-theme";
import tailwindcss from "@tailwindcss/vite";
import remarkBreaks from "remark-breaks";
const theme = defineTheme({
    componentsPath: import.meta.resolve("./src/theme"),
    extends: defaultTheme,
});



export default defineConfig(
    createWithSolidBase(theme)({
        server: {
            prerender: {
                crawlLinks: true,
            },
            esbuild: { options: { target: "es2022" } },
        },
        vite: {
            plugins: [
                tailwindcss(),
            ],
        },

    },
        {
            title: "",
            description: "",
            lang: "en",
            markdown: {
                expressiveCode: {},

                toc: {
                    minDepth: 2,
                    maxDepth: 4,
                },

                remarkPlugins: [
                    remarkBreaks
                ],

                rehypePlugins: [],
            },
            themeConfig: {
                nav: [
                    {
                        text: "Guide",
                        link: "/guide",

                    },
                    {
                        text: "Reference",
                        link: "/reference",
                    },
                ]
                ,
                sidebar: {
                    "/javascript": [
                        {
                            title: "Introduction",
                            link: "/introduction"
                        },
                        {
                            title: "Get-Started",
                            collapsed: true,
                            base: "/get-started",
                            items: [
                                {
                                    title: "Variables",
                                    link: "/variables"
                                },
                                {
                                    title: "Variables",
                                    link: "/Nigga"
                                },
                                {
                                    title: "Variables",
                                    link: "/whathelly"
                                },
                            ]

                        },
                        {
                            title: "Data Types",
                            collapsed: true,
                            items: [
                                {
                                    title: "Overview",
                                    link: "/overview"
                                },
                                {
                                    title: "String",
                                    link: "/string"
                                },
                                {
                                    title: "Numbers",
                                    link: "/numbers"
                                },
                                {
                                    title: "Boolean",
                                    link: "/boolean"
                                },
                                {
                                    title: "Array",
                                    link: "/array"
                                },
                                {
                                    title: "Function",
                                    link: "/function"
                                },
                                {
                                    title: "Objects",
                                    link: "/objects"
                                },
                                {
                                    title: "Null",
                                    link: "/null"
                                },
                                {
                                    title: "undefined",
                                    link: "/undefined"
                                },
                                {
                                    title: "Symbol",
                                    link: "/symbol"
                                },
                                {
                                    title: "Data",
                                    link: "/data"
                                },
                            ]
                        },
                        {
                            title: "Conditions",
                            collapsed: true,
                            items: [
                                {
                                    title: "IF else",
                                    link: "/if-else"
                                },
                                {
                                    title: "Condition with loops",
                                    link: "/condition-with-loops"
                                },
                            ]
                        },
                        {
                            title: "Methods",
                            collapsed: true,
                            items: [
                                {
                                    title: "Basic Methods",
                                    link: "/basic-methods"
                                },
                                {
                                    title: "Array Methods",
                                    link: "/array-methods"
                                },
                                {
                                    title: "Functions Methods",
                                    link: "/functions-methods"
                                },
                                {
                                    title: "Classes Methods",
                                    link: "/classes-methods"
                                },
                            ]
                        },
                        {
                            title: "DOM",
                            collapsed: true,
                            items: [
                                {
                                    title: "DOM Methods",
                                    link: "/dom-methods"
                                },
                                {
                                    title: "Event Listeners",
                                    link: "/event-listeners"
                                },
                            ]
                        },
                        {
                            title: "Asynchronous",
                            collapsed: true,
                            items: [
                                {
                                    title: "Sync and Async",
                                    link: "/sync-and-async"
                                },
                                {
                                    title: "Api Request",
                                    link: "/api-request"
                                },
                                {
                                    title: "Promises",
                                    link: "/promises"
                                },
                                {
                                    title: "Async Await",
                                    link: "/async-await"
                                },
                            ]
                        },
                        {
                            title: "OOP in Javascript",
                            collapsed: true,
                            items: [
                                {
                                    title: "Classes",
                                    link: "/classes"
                                },
                                {
                                    title: "OOP",
                                    link: "/oop"
                                },
                            ]
                        },
                        {
                            title: "Export Import",
                            collapsed: true,
                            items: [
                                {
                                    title: "Introduction",
                                    link: "/introduction"
                                },
                                {
                                    title: "Export",
                                    link: "/export"
                                },
                                {
                                    title: "Import",
                                    link: "/import"
                                },
                            ]
                        },
                        {
                            title: "Advance",
                            collapsed: true,
                            items: [
                                {
                                    title: "Javascript Stacking Context",
                                    link: "/javascript-stacking-context"
                                },
                                {
                                    title: "Javascript Optimisation",
                                    link: "/javascript-optimisation"
                                },
                                {
                                    title: "Javascript Behind the scene",
                                    link: "/javascript-behind-the-scene"
                                },
                                {
                                    title: "Interview Question",
                                    link: "/interview-question"
                                },
                            ]
                        },
                        {
                            title: "Interview",
                            collapsed: true,
                            base: "/Interview",
                            items: [
                                {
                                    title: "Interview Questions",
                                    link: "/questions"
                                },

                            ]
                        },
                        {
                            title: "References",
                            collapsed: true,
                            items: [
                                {
                                    title: "Q",
                                    link: "/symbol"
                                },
                                {
                                    title: "Symbol",
                                    link: "/symbol"
                                },
                                {
                                    title: "Data",
                                    link: "/data"
                                },
                            ]
                        },
                    ],
                    "/react": [
                        {
                            title: "Introduction",
                            link: "/introduction"
                        },
                        {
                            title: "Get-Started",
                            collapsed: true,
                            base: "/get-started",
                            items: [
                                {
                                    title: "Variables",
                                    link: "/variables"
                                },
                                {
                                    title: "Variables",
                                    link: "/Nigga"
                                },
                                {
                                    title: "Variables",
                                    link: "/whathelly"
                                },
                            ]

                        },
                        {
                            title: "Data Types",
                            collapsed: true,
                            items: [
                                {
                                    title: "Overview",
                                    link: "/overview"
                                },
                                {
                                    title: "String",
                                    link: "/string"
                                },
                                {
                                    title: "Numbers",
                                    link: "/numbers"
                                },
                                {
                                    title: "Boolean",
                                    link: "/boolean"
                                },
                                {
                                    title: "Array",
                                    link: "/array"
                                },
                                {
                                    title: "Function",
                                    link: "/function"
                                },
                                {
                                    title: "Objects",
                                    link: "/objects"
                                },
                                {
                                    title: "Null",
                                    link: "/null"
                                },
                                {
                                    title: "undefined",
                                    link: "/undefined"
                                },
                                {
                                    title: "Symbol",
                                    link: "/symbol"
                                },
                                {
                                    title: "Data",
                                    link: "/data"
                                },
                            ]
                        },
                        {
                            title: "Conditions",
                            collapsed: true,
                            items: [
                                {
                                    title: "IF else",
                                    link: "/if-else"
                                },
                                {
                                    title: "Condition with loops",
                                    link: "/condition-with-loops"
                                },
                            ]
                        },
                        {
                            title: "Methods",
                            collapsed: true,
                            items: [
                                {
                                    title: "Basic Methods",
                                    link: "/basic-methods"
                                },
                                {
                                    title: "Array Methods",
                                    link: "/array-methods"
                                },
                                {
                                    title: "Functions Methods",
                                    link: "/functions-methods"
                                },
                                {
                                    title: "Classes Methods",
                                    link: "/classes-methods"
                                },
                            ]
                        },
                        {
                            title: "DOM",
                            collapsed: true,
                            items: [
                                {
                                    title: "DOM Methods",
                                    link: "/dom-methods"
                                },
                                {
                                    title: "Event Listeners",
                                    link: "/event-listeners"
                                },
                            ]
                        },
                        {
                            title: "Asynchronous",
                            collapsed: true,
                            items: [
                                {
                                    title: "Sync and Async",
                                    link: "/sync-and-async"
                                },
                                {
                                    title: "Api Request",
                                    link: "/api-request"
                                },
                                {
                                    title: "Promises",
                                    link: "/promises"
                                },
                                {
                                    title: "Async Await",
                                    link: "/async-await"
                                },
                            ]
                        },
                        {
                            title: "OOP in Javascript",
                            collapsed: true,
                            items: [
                                {
                                    title: "Classes",
                                    link: "/classes"
                                },
                                {
                                    title: "OOP",
                                    link: "/oop"
                                },
                            ]
                        },
                        {
                            title: "Export Import",
                            collapsed: true,
                            items: [
                                {
                                    title: "Introduction",
                                    link: "/introduction"
                                },
                                {
                                    title: "Export",
                                    link: "/export"
                                },
                                {
                                    title: "Import",
                                    link: "/import"
                                },
                            ]
                        },
                        {
                            title: "Advance",
                            collapsed: true,
                            items: [
                                {
                                    title: "Javascript Stacking Context",
                                    link: "/javascript-stacking-context"
                                },
                                {
                                    title: "Javascript Optimisation",
                                    link: "/javascript-optimisation"
                                },
                                {
                                    title: "Javascript Behind the scene",
                                    link: "/javascript-behind-the-scene"
                                },
                                {
                                    title: "Interview Question",
                                    link: "/interview-question"
                                },
                            ]
                        },
                        {
                            title: "Interview",
                            collapsed: true,
                            base: "/Interview",
                            items: [
                                {
                                    title: "Interview Questions",
                                    link: "/questions"
                                },

                            ]
                        },
                        {
                            title: "References",
                            collapsed: true,
                            items: [
                                {
                                    title: "Q",
                                    link: "/symbol"
                                },
                                {
                                    title: "Symbol",
                                    link: "/symbol"
                                },
                                {
                                    title: "Data",
                                    link: "/data"
                                },
                            ]
                        },
                    ],
                    "/web": [
                        {
                            title: "Regex",
                            link: "/Regex"
                        },

                    ],
                    "/mongodb": [
                        {
                            title: "Introduction",
                            link: "/introduction"
                        },
                        {
                            title: "Installation",
                            link: "/installing"
                        },
                        {
                            title: "Connect Database",
                            link: "/connectDb"
                        },
                        {
                            title: "Get-Started",
                            collapsed: true,
                            items: [
                                {
                                    title: "Schema",
                                    link: "/Schema"
                                },
                                {
                                    title: "models",
                                    link: "/models"
                                },
                                {
                                    title: "Create data",
                                    link: "/Methods"
                                },

                            ]

                        },
                        {
                            title: "Middleware and Query",
                            collapsed: true,
                            items: [
                                {
                                    title: "Middleware",
                                    link: "/Methods"
                                },
                                {
                                    title: "Query Object",
                                    link: "/queryObject"
                                },


                            ]
                        },
                    ],
                    "/canvas": [
                        {
                            title: "Introduction",
                            link: "/introduction"
                        },
                        {
                            title: "Get-Started",
                            collapsed: true,
                            items: [
                                {
                                    title: "Schema",
                                    link: "/Schema"
                                },
                                {
                                    title: "models",
                                    link: "/models"
                                },
                                {
                                    title: "Create data",
                                    link: "/Methods"
                                },

                            ]

                        },
                        {
                            title: "Middleware and Query",
                            collapsed: true,
                            items: [
                                {
                                    title: "Middleware",
                                    link: "/Methods"
                                },
                                {
                                    title: "Query Object",
                                    link: "/queryObject"
                                },


                            ]
                        },
                    ],

                }
            }
        },
    )
);