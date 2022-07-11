window.onload = function () {
    var btn1 = document.getElementById('button1');
    var btn2 = document.getElementById('button2');
    var btn3 = document.getElementById('button3');
    var btn4 = document.getElementById('button4');
    var btn5 = document.getElementById('button5');
    var btn6 = document.getElementById('button6');
    var btn7 = document.getElementById('button7');
    var btn8 = document.getElementById('button8');
    var graph1 = echarts.init(document.getElementById('graph1'));
    var graph2 = echarts.init(document.getElementById('graph2'));
    var graph3 = echarts.init(document.getElementById('graph3'));
    var graph5 = echarts.init(document.getElementById('graph5'));
    var graph8 = echarts.init(document.getElementById('graph8'));
    var left = ['graph1', 'graph4_left', 'graph5', 'graph6_left', 'useless', 'graph7_left'];
    var right = ['graph2', 'graph3', 'graph4_right', 'graph6_right', 'graph7_down', 'graph7_right', 'graph8']
    var btns = new Array(btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8);
    option1 = {
        title: {
            text: '商业关联图',
            subtext: '*非正则化',
            top: 'top',
            left: '60',
            textStyle: {
                color: 'rgb(248, 248, 255)'
            },
            subtextStyle: {
                color: 'rgb(248, 248, 255)'
            }
        },
        tooltip: {
            show: false,
        },
        animationDuration: 3000,
        animationEasingUpdate: 'quinticInOut',

        // draggable: true,

        series: [{
            name: '商业关联',
            type: 'graph',
            layout: 'none',
            roam: true,
            lineStyle: {
                normal: {
                    color: '#FFFFFF',
                    curveness: 0.3,
                    width: 2
                }
            },
            emphasis: {
                focus: 'adjacency',
                lineStyle: {
                    width: 5
                },
            },
            label: {
                show: true
            },
            "nodes": [{
                "id": "0",
                "name": "0",
                "symbolSize": 50,
                "x": 0,
                "y": 300,
                "value": 28.685715,
                "category": "C"
            },
            {
                "id": "1",
                "name": "1",
                "symbolSize": 50,
                "x": 0,
                "y": 200,
                "value": 4,
                "category": "C"
            },
            {
                "id": "2",
                "name": "2",
                "symbolSize": 50,
                "x": -100,
                "y": 200,
                "value": 9.485714,
                "category": "C"
            },
            {
                "id": "3",
                "name": "3",
                "symbolSize": 50,
                "x": -100,
                "y": 256,
                "value": 9.485714,
                "category": "C"
            },
            {
                "id": "4",
                "name": "4",
                "symbolSize": 50,
                "x": -150,
                "y": 300,
                "value": 4,
                "category": "C"
            },
            {
                "id": "5",
                "name": "5",
                "symbolSize": 50,
                "x": -166,
                "y": 333,
                "value": 4,
                "category": "C"
            },
            {
                "id": "6",
                "name": "6",
                "symbolSize": 50,
                "x": -220,
                "y": 233,
                "value": 4,
                "category": "C"
            },
            {
                "id": "7",
                "name": "7",
                "symbolSize": 50,
                "x": -188,
                "y": 200,
                "value": 4,
                "category": "C"
            },
            {
                "id": "8",
                "name": "8",
                "symbolSize": 50,
                "x": -50,
                "y": 199,
                "value": 4,
                "category": "C"
            },
            {
                "id": "9",
                "name": "9",
                "symbolSize": 50,
                "x": -60,
                "y": 245,
                "value": 4,
                "category": "C"
            }
            ],
            "links": [{
                "source": "0",
                "target": "6",
                "value": "1",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "0",
                "target": "9",
                "value": "3",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "1",
                "target": "2",
                "value": "7",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "1",
                "target": "4",
                "value": "9",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "1",
                "target": "7",
                "value": "2",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "1",
                "target": "9",
                "value": "4",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "2",
                "target": "0",
                "value": "2",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "2",
                "target": "5",
                "value": "4",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "0",
                "target": "9",
                "value": "3",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "2",
                "target": "6",
                "value": "1",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "2",
                "target": "9",
                "value": "3",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "3",
                "target": "0",
                "value": "7",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "3",
                "target": "6",
                "value": "7",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "3",
                "target": "7",
                "value": "5",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "4",
                "target": "8",
                "value": "7",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "5",
                "target": "0",
                "value": "3",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "5",
                "target": "3",
                "value": "5",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "6",
                "target": "0",
                "value": "6",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "6",
                "target": "1",
                "value": "5",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "6",
                "target": "2",
                "value": "9",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "6",
                "target": "3",
                "value": "2",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "6",
                "target": "9",
                "value": "3",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "7",
                "target": "2",
                "value": "2",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "7",
                "target": "4",
                "value": "5",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "7",
                "target": "6",
                "value": "5",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "7",
                "target": "8",
                "value": "4",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "8",
                "target": "4",
                "value": "3",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "8",
                "target": "6",
                "value": "8",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "8",
                "target": "7",
                "value": "9",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "8",
                "target": "9",
                "value": "7",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            ],
            "categories": [{
                "name": "A"
            },
            {
                "name": "B"
            },
            {
                "name": "C"
            },
            {
                "name": "D"
            },
            {
                "name": "E"
            },
            {
                "name": "F"
            },
            {
                "name": "G"
            },
            {
                "name": "H"
            },
            {
                "name": "I"
            }
            ],
        }]
    };
    option2 = {
        title: {
            text: '银行持有的高价值名单',
            subtext: '',
            top: 'top',
            left: 'left',
            textStyle: {
                color: 'rgb(248, 248, 255)'
            },
            subtextStyle: {
                color: 'rgb(248, 248, 255)'
            }
        },
        tooltip: {
            show: false,
        },
        animationDuration: 1000,
        animationEasingUpdate: 'quinticInOut',
        draggable: true,

        series: [{
            name: '商业关联',
            type: 'graph',
            layout: 'none',
            // roam: true,
            lineStyle: {
                normal: {
                    color: 'source',
                    curveness: 0.3
                }
            },
            emphasis: {
                focus: 'adjacency',
                lineStyle: {
                    width: 5
                },
            },
            label: {
                show: true
            },
            "nodes": [{
                "id": "0",
                "name": "0",
                "symbolSize": 50,
                "y": -100,
                "x": 0,
                "value": 28.685715,
                "category": "C"
            },
            {
                "id": "2",
                "name": "2",
                "symbolSize": 50,
                "y": -100,
                "x": 40,
                "value": 9.485714,
                "category": "C"
            },
            {
                "id": "4",
                "name": "4",
                "symbolSize": 50,
                "y": -100,
                "x": 80,
                "value": 4,
                "category": "C"
            },
            {
                "id": "6",
                "name": "6",
                "symbolSize": 50,
                "y": -100,
                "x": 120,
                "value": 4,
                "category": "C"
            },
            {
                "id": "8",
                "name": "8",
                "symbolSize": 50,
                "y": -100,
                "x": 160,
                "value": 4,
                "category": "C"
            },
            {
                "id": "10",
                "name": "10",
                "symbolSize": 50,
                "y": -100,
                "x": 200,
                "value": 4,
                "category": "C"
            },
            ],
            "categories": [{
                "name": "A"
            },
            {
                "name": "B"
            },
            {
                "name": "C"
            },
            {
                "name": "D"
            },
            {
                "name": "E"
            },
            {
                "name": "F"
            },
            {
                "name": "G"
            },
            {
                "name": "H"
            },
            {
                "name": "I"
            }
            ],
        }]
    };
    option3 = {
        title: {
            text: '红色节点为求得的交集',
            subtext: '',
            top: 'top',
            left: 'left',
            textStyle: {
                color: 'rgb(248, 248, 255)'
            },
            subtextStyle: {
                color: 'rgb(248, 248, 255)'
            }
        },
        tooltip: {
            show: false,
        },
        animationDuration: 1000,
        animationEasingUpdate: 'quinticInOut',
        draggable: true,

        series: [{
            name: '商业关联',
            type: 'graph',
            layout: 'none',
            // roam: true,
            lineStyle: {
                normal: {
                    color: 'source',
                    curveness: 0.3
                }
            },
            emphasis: {
                focus: 'adjacency',
                lineStyle: {
                    width: 5
                },
            },
            label: {
                show: true
            },
            "nodes": [{
                "id": "0",
                "name": "0",
                "symbolSize": 50,
                "y": -100,
                "x": 0,
                "value": 28.685715,
                "category": "D"
            },
            {
                "id": "2",
                "name": "2",
                "symbolSize": 50,
                "y": -100,
                "x": 40,
                "value": 9.485714,
                "category": "D"
            },
            {
                "id": "4",
                "name": "4",
                "symbolSize": 50,
                "y": -100,
                "x": 80,
                "value": 4,
                "category": "D"
            },
            {
                "id": "6",
                "name": "6",
                "symbolSize": 50,
                "y": -100,
                "x": 120,
                "value": 4,
                "category": "D"
            },
            {
                "id": "8",
                "name": "8",
                "symbolSize": 50,
                "y": -100,
                "x": 160,
                "value": 4,
                "category": "D"
            },
            {
                "id": "10",
                "name": "10",
                "symbolSize": 50,
                "y": -100,
                "x": 200,
                "value": 4,
                "category": "C"
            },
            ],
            "categories": [{
                "name": "A"
            },
            {
                "name": "B"
            },
            {
                "name": "C"
            },
            {
                "name": "D"
            },
            {
                "name": "E"
            },
            {
                "name": "F"
            },
            {
                "name": "G"
            },
            {
                "name": "H"
            },
            {
                "name": "I"
            }
            ],
        }]
    };
    option5 = {
        title: {
            text: '商业关联图',
            subtext: '*正则化',
            top: 'top',
            left: '60',
            textStyle: {
                color: 'rgb(248, 248, 255)'
            },
            subtextStyle: {
                color: 'rgb(248, 248, 255)'
            }
        },
        tooltip: {
            show: false,
        },
        animationDuration: 3000,
        animationEasingUpdate: 'quinticInOut',
        draggable: true,

        series: [{
            name: '商业关联',
            type: 'graph',
            layout: 'none',
            roam: true,
            lineStyle: {
                normal: {
                    color: '#FFFFFF',
                    curveness: 0.3,
                    width: 2
                }
            },
            emphasis: {
                focus: 'adjacency',
                lineStyle: {
                    width: 5
                },
            },
            label: {
                show: true
            },
            "nodes": [{
                "id": "0",
                "name": "0",
                "symbolSize": 50,
                "category": "C",
                "x": 0,
                "y": 300,
                "value": 28.685715,
            },
            {
                "id": "1",
                "name": "1",
                "symbolSize": 50,
                "category": "C",
                "x": 0,
                "y": 200,
                "value": 4,
            },
            {
                "id": "2",
                "name": "2",
                "symbolSize": 50,
                "category": "C",
                "x": -100,
                "y": 200,
                "value": 9.485714,
            },
            {
                "id": "3",
                "name": "3",
                "symbolSize": 50,
                "category": "C",
                "x": -100,
                "y": 256,
                "value": 9.485714,
            },
            {
                "id": "4",
                "name": "4",
                "symbolSize": 50,
                "category": "C",
                "x": -150,
                "y": 300,
                "value": 4,
            },
            {
                "id": "5",
                "name": "5",
                "symbolSize": 50,
                "category": "C",
                "x": -166,
                "y": 333,
                "value": 4,
            },
            {
                "id": "6",
                "name": "6",
                "symbolSize": 50,
                "category": "C",
                "x": -220,
                "y": 233,
                "value": 4,
            },
            {
                "id": "7",
                "name": "7",
                "symbolSize": 50,
                "category": "C",
                "x": -188,
                "y": 200,
                "value": 4,
            },
            {
                "id": "8",
                "name": "8",
                "symbolSize": 50,
                "category": "C",
                "x": -50,
                "y": 199,
                "value": 4,
            },
            {
                "id": "9",
                "name": "9",
                "symbolSize": 50,
                "category": "C",
                "x": -60,
                "y": 245,
                "value": 4,
            }
            ],
            "links": [{
                "source": "2",
                "target": "0",
                "value": "2",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "3",
                "target": "0",
                "value": "7",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "5",
                "target": "0",
                "value": "3",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "6",
                "target": "0",
                "value": "6",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "9",
                "target": "0",
                "value": "0",
                "label": {
                    show: true,
                    formatter: '{@value}'
                },
                lineStyle: {
                    color: "red"
                }
            },
            {
                "source": "5",
                "target": "1",
                "value": "0",
                "label": {
                    show: true,
                    formatter: '{@value}'
                },
                lineStyle: {
                    color: "red"
                }
            },
            {
                "source": "6",
                "target": "1",
                "value": "5",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "9",
                "target": "1",
                "value": "0",
                "label": {
                    show: true,
                    formatter: '{@value}'
                },
                lineStyle: {
                    color: "red"
                }
            },
            {
                "source": "1",
                "target": "2",
                "value": "7",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "4",
                "target": "2",
                "value": "0",
                "label": {
                    show: true,
                    formatter: '{@value}'
                },
                lineStyle: {
                    color: "red"
                }
            },
            {
                "source": "6",
                "target": "2",
                "value": "9",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "7",
                "target": "2",
                "value": "2",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "9",
                "target": "2",
                "value": "2",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "4",
                "target": "3",
                "value": "0",
                "label": {
                    show: true,
                    formatter: '{@value}'
                },
                lineStyle: {
                    color: "red"
                }
            },
            {
                "source": "5",
                "target": "3",
                "value": "5",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "7",
                "target": "3",
                "value": "0",
                "label": {
                    show: true,
                    formatter: '{@value}'
                },
                lineStyle: {
                    color: "red"
                }
            },
            {
                "source": "8",
                "target": "3",
                "value": "0",
                "label": {
                    show: true,
                    formatter: '{@value}'
                },
                lineStyle: {
                    color: "red"
                }
            },
            {
                "source": "9",
                "target": "3",
                "value": "0",
                "label": {
                    show: true,
                    formatter: '{@value}'
                },
                lineStyle: {
                    color: "red"
                }
            },
            {
                "source": "1",
                "target": "4",
                "value": "9",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "3",
                "target": "4",
                "value": "0",
                "label": {
                    show: true,
                    formatter: '{@value}'
                },
                lineStyle: {
                    color: "red"
                }
            },
            {
                "source": "7",
                "target": "3",
                "value": "0",
                "label": {
                    show: true,
                    formatter: '{@value}'
                },
                lineStyle: {
                    color: "red"
                }
            },
            {
                "source": "8",
                "target": "3",
                "value": "0",
                "label": {
                    show: true,
                    formatter: '{@value}'
                },
                lineStyle: {
                    color: "red"
                }
            },
            {
                "source": "9",
                "target": "3",
                "value": "0",
                "label": {
                    show: true,
                    formatter: '{@value}'
                },
                lineStyle: {
                    color: "red"
                }
            },
            {
                "source": "1",
                "target": "4",
                "value": "9",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "3",
                "target": "4",
                "value": "0",
                "label": {
                    show: true,
                    formatter: '{@value}'
                },
                lineStyle: {
                    color: "red"
                }
            },
            {
                "source": "5",
                "target": "4",
                "value": "0",
                "label": {
                    show: true,
                    formatter: '{@value}'
                },
                lineStyle: {
                    color: "red"
                }
            },
            {
                "source": "7",
                "target": "4",
                "value": "5",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "8",
                "target": "4",
                "value": "3",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "2",
                "target": "5",
                "value": "4",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "3",
                "target": "5",
                "value": "0",
                "label": {
                    show: true,
                    formatter: '{@value}'
                },
                lineStyle: {
                    color: "red"
                }
            },
            {
                "source": "4",
                "target": "5",
                "value": "0",
                "label": {
                    show: true,
                    formatter: '{@value}'
                },
                lineStyle: {
                    color: "red"
                }
            },
            {
                "source": "6",
                "target": "5",
                "value": "0",
                "label": {
                    show: true,
                    formatter: '{@value}'
                },
                lineStyle: {
                    color: "red"
                }
            },
            {
                "source": "0",
                "target": "6",
                "value": "1",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "2",
                "target": "6",
                "value": "1",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "6",
                "target": "3",
                "value": "7",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "7",
                "target": "6",
                "value": "5",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "8",
                "target": "6",
                "value": "8",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "0",
                "target": "7",
                "value": "0",
                "label": {
                    show: true,
                    formatter: '{@value}'
                },
                lineStyle: {
                    color: "red"
                }
            },
            {
                "source": "7",
                "target": "1",
                "value": "2",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "7",
                "target": "3",
                "value": "5",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "4",
                "target": "7",
                "value": "0",
                "label": {
                    show: true,
                    formatter: '{@value}'
                },
                lineStyle: {
                    color: "red"
                }
            },
            {
                "source": "8",
                "target": "7",
                "value": "9",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "0",
                "target": "8",
                "value": "0",
                "label": {
                    show: true,
                    formatter: '{@value}'
                },
                lineStyle: {
                    color: "red"
                }
            },
            {
                "source": "1",
                "target": "8",
                "value": "0",
                "label": {
                    show: true,
                    formatter: '{@value}'
                },
                lineStyle: {
                    color: "red"
                }
            },
            {
                "source": "2",
                "target": "8",
                "value": "0",
                "label": {
                    show: true,
                    formatter: '{@value}'
                },
                lineStyle: {
                    color: "red"
                }
            },
            {
                "source": "4",
                "target": "8",
                "value": "7",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "7",
                "target": "8",
                "value": "4",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "0",
                "target": "9",
                "value": "3",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "1",
                "target": "9",
                "value": "4",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "2",
                "target": "9",
                "value": "3",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "6",
                "target": "9",
                "value": "3",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            {
                "source": "8",
                "target": "9",
                "value": "7",
                "label": {
                    show: true,
                    formatter: '{@value}'
                }
            },
            ],
            "categories": [{
                "name": "A"
            },
            {
                "name": "B"
            },
            {
                "name": "C"
            },
            {
                "name": "D"
            },
            {
                "name": "E"
            },
            {
                "name": "F"
            },
            {
                "name": "G"
            },
            {
                "name": "H"
            },
            {
                "name": "I"
            }
            ],
        }]
    };
    option8 = {
        title: {
            subtext: '',
            top: 'top',
            left: 'left',
            textStyle: {
                color: 'rgb(248, 248, 255)'
            },
            subtextStyle: {
                color: 'rgb(248, 248, 255)'
            }
        },
        tooltip: {
            show: false,
        },
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        draggable: true,

        series: [{
            name: '商业关联',
            type: 'graph',
            layout: 'none',
            // roam: true,
            lineStyle: {
                normal: {
                    color: 'source',
                    curveness: 0.3
                }
            },
            emphasis: {
                focus: 'adjacency',
                lineStyle: {
                    width: 5
                },
            },
            label: {
                show: true
            },
            "nodes": [{
                "id": "7",
                "name": "7",
                "symbolSize": 50,
                "y": 0,
                "x": 150,
                "value": 4,
                "category": "F"
            },
            {
                "id": "9",
                "name": "9",
                "symbolSize": 50,
                "y": 80,
                "x": 150,
                "value": 4,
                "category": "F"
            }
            ],
            "categories": [{
                "name": "A"
            },
            {
                "name": "B"
            },
            {
                "name": "C"
            },
            {
                "name": "D"
            },
            {
                "name": "E"
            },
            {
                "name": "F"
            },
            {
                "name": "G"
            },
            {
                "name": "H"
            },
            {
                "name": "I"
            }
            ],
        }]
    };
    btn1.onclick = function () {
        var i = 0;
        for (len = left.length; i < len; ++i) {
            document.getElementById(left[i]).style.display = "none";
        }
        document.getElementById("graph4_right").style.display = "none";
        document.getElementById("graph6_right").style.display = "none";
        document.getElementById("graph7_right").style.display = "none";
        document.getElementById("graph7_down").style.display = "none";
        document.getElementById("graph1").style.display = "block";
        graph1.clear();
        graph1.setOption(option1);
    }
    btn2.onclick = function () {
        var i = 0;
        for (len = right.length; i < len; ++i) {
            if (document.getElementById(right[i]).style.display == "block")
                document.getElementById(right[i]).style.display = "none";
        }
        document.getElementById("graph4_left").style.display = "none";
        document.getElementById("graph6_left").style.display = "none";
        document.getElementById("graph7_left").style.display = "none";
        document.getElementById("useless").style.display = "none";
        document.getElementById("graph2").style.display = "block";
        graph2.clear();
        graph2.setOption(option2);
    }
    btn3.onclick = function () {
        var i = 0;
        for (len = right.length; i < len; ++i) {
            if (document.getElementById(right[i]).style.display == "block")
                document.getElementById(right[i]).style.display = "none";
        }
        document.getElementById("graph4_left").style.display = "none";
        document.getElementById("graph6_left").style.display = "none";
        document.getElementById("graph7_left").style.display = "none";
        document.getElementById("useless").style.display = "none";
        document.getElementById("graph3").style.display = "block";
        graph3.clear();
        graph3.setOption(option3);
    }
    btn4.onclick = function () {
        var i = 0;
        for (len = left.length; i < len; ++i) {
            if (document.getElementById(left[i]).style.display == "block")
                document.getElementById(left[i]).style.display = "none";
        }
        i = 0;
        for (len = right.length; i < len; ++i) {
            if (document.getElementById(right[i]).style.display == "block")
                document.getElementById(right[i]).style.display = "none";
        }
        document.getElementById('graph4_left').innerHTML = " <article class=\"message \"> \
                                                    <div class=\"message-header\">\
                                                      <p>运营商持有的秘密分享值</p>\
                                                    </div>\
                                                    <div class=\"message-body\">\
                                                    11911958826217917219</br>\
                                                    15071054034103502725</br>\
                                                    07253452175981048190</br>\
                                                    08027846066151648052</br>\
                                                    10003940641209695129</br>\
                                                    13570528438978301237</br>\
                                                    16894186688485061704</br>\
                                                    18271457441899764598</br>\
                                                    05880481137721788360</br>\
                                                    04622224013459119777\
                                                    </div>\
                                                    </article> ";
        document.getElementById('graph4_right').innerHTML = " <article class=\"message \"> \
                                                    <div class=\"message-header\">\
                                                      <p>银行持有的秘密分享值</p>\
                                                    </div>\
                                                    <div class=\"message-body\">\
                                                    06534785247491634398</br>\
                                                    03375690039606048891</br>\
                                                    11193291897728503427</br>\
                                                    10418898007557903564</br>\
                                                    08442803432499856488</br>\
                                                    04876215634731250379</br>\
                                                    01552557385224489913</br>\
                                                    00175286631809787018</br>\
                                                    12566262935987763257</br>\
                                                    13824520060250431839 \
                                                    </div>\
                                                    </article> ";
        document.getElementById('graph4_left').style.display = "block";
        document.getElementById('graph4_right').style.display = "block";
    }
    btn5.onclick = function () {
        var i = 0;
        for (len = left.length; i < len; ++i) {
            if (document.getElementById(left[i]).style.display == "block")
                document.getElementById(left[i]).style.display = "none";
        }
        i = 0;
        document.getElementById("graph4_right").style.display = "none";
        document.getElementById("graph6_right").style.display = "none";
        document.getElementById("graph7_right").style.display = "none";
        document.getElementById("graph7_down").style.display = "none";

        document.getElementById('graph5').style.display = "block";
        graph5.clear();
        graph5.setOption(option5);
    }
    btn6.onclick = function () {
        var i = 0;
        for (len = left.length; i < len; ++i) {
            if (document.getElementById(left[i]).style.display == "block")
                document.getElementById(left[i]).style.display = "none";
        }
        i = 0;
        for (len = right.length; i < len; ++i) {
            if (document.getElementById(right[i]).style.display == "block")
                document.getElementById(right[i]).style.display = "none";
        }
        document.getElementById('graph6_left').innerHTML = " <article class=\"message\"> \
                                                    <div class=\"message-header\">\
                                                      <p>运营商持有的秘密分享值</p>\
                                                    </div>\
                                                    <div class=\"message-body\">\
                                                    05423854815196449431</br>\
                                                    04506128482916344081</br>\
                                                    10173826969657893664</br>\
                                                    16000162035353601432</br>\
                                                    03593941866371356557</br>\
                                                    01213766793450266791</br>\
                                                    12738488773107653374</br>\
                                                    10773168955513364316</br>\
                                                    15113701442327013426</br>\
                                                    09496220332580018339</br>\
                                                    11871612696785822326</br>\
                                                    02070998475956623980</br>\
                                                    03233702796340941369</br>\
                                                    14536735342430658788</br>\
                                                    04670500453013402770</br>\
                                                    17285377250620586451</br>\
                                                              ...\
                                                    </div>\
                                                    </article> ";
        document.getElementById('graph6_right').innerHTML = " <article class=\"message\"> \
                                                    <div class=\"message-header\">\
                                                      <p>银行持有的秘密分享值</p>\
                                                    </div>\
                                                    <div class=\"message-body\">\
                                                    13022889258513102313</br>\
                                                    13940615590793209327</br>\
                                                    08272917104051658720</br>\
                                                    02446582038355950491</br>\
                                                    14852802207338195059</br>\
                                                    17232977280259284825</br>\
                                                    05708255300601898242</br>\
                                                    07673575118196187556</br>\
                                                    03333042631382538190</br>\
                                                    08950523741129533277</br>\
                                                    06575131376923731082</br>\
                                                    16375745597752927636</br>\
                                                    15213041277368610707</br>\
                                                    03910008731278892998</br>\
                                                    13776243620696148948</br>\
                                                    01161366823088965165</br>\
                                                            ...\
                                                    </div>\
                                                    </article> ";
        document.getElementById('graph6_left').style.display = "block";
        document.getElementById('graph6_right').style.display = "block";
    }
    var info0 = function () {
        graph7_down.innerHTML = "<article class=\"message\"> \
      <div class=\"message-body\"> 两方秘密分享值对应的节点明文权值</br>1 0 1 0 1 0 1 0 1 0 1 0</article></div>";
        graph7_left.innerHTML = " <article class=\"message\"> \
      <div class=\"message-header\">\
        <p>运营商持有的秘密分享值</p>\
      </div>\
      <div class=\"message-body\">\
      11911958826217917219</br> \
                          15071054034103502725</br> \
                          07253452175981048190</br>   \
                          08027846066151648052</br>\
                          10003940641209695129</br>\
                          13570528438978301237</br>\
                          16894186688485061704</br>\
                          18271457441899764598</br>\
                          05880481137721788360</br>\
                          04622224013459119777</div>\
                          </article>  ";
        graph7_right.innerHTML = " <article class=\"message\"> \
      <div class=\"message-header\">\
        <p>银行持有的秘密分享值</p>\
      </div>\
      <div class=\"message-body\">\
                              \
                            06534785247491634398</br>\
                            03375690039606048891</br>\
                            11193291897728503427</br>\
                            10418898007557903564</br>\
                            08442803432499856488</br>\
                            04876215634731250379</br>\
                            01552557385224489913</br>\
                            00175286631809787018</br>\
                            12566262935987763257</br>\
                            13824520060250431839 </div>\
                            </article> ";
    }
    var info1 = function () {
        graph7_down.innerHTML = "<article class=\"message\"> \
        <div class=\"message-body\">两方秘密分享值对应的节点明文权值</br>2 1 2 0 2 1 5 4 3 5</article></div>";
        graph7_left.innerHTML = " <article class=\"message\"> \
      <div class=\"message-header\">\
        <p>运营商持有的秘密分享值</p>\
      </div>\
      <div class=\"message-body\">\
      16401995740814945619</br>\
                          12563021096444710862</br>\
                          10478189413012480267</br>\
                          855861354020623995</br>\
                          919049144887696721</br>\
                          12281489952957774511</br>\
                          16337742412235521892</br>\
                          5330642625683227680</br>\
                          10553850247251848405</br>\
                          11108301793315593799</div>\
                          </article>  ";
        graph7_right.innerHTML = " <article class=\"message\"> \
      <div class=\"message-header\">\
        <p>银行持有的秘密分享值</p>\
      </div>\
      <div class=\"message-body\">\
                        2044748332894606688</br>\
                          5883722977264841010</br>\
                          7968554660697072065</br>\
                          17590882719688927621</br>\
                          17527694928821855535</br>\
                          6165254120751777361</br>\
                          2109001661474031132</br>\
                          13116101448026325088</br>\
                          7892893826457704064</br>\
                          7338442280393959250 </div>\
                          </article> ";
    }
    var info2 = function () {
        graph7_down.innerHTML = "<article class=\"message\"> \
      <div class=\"message-body\">两方秘密分享值对应的节点明文权值</br>13 6 24 5 23 3 27 21 15 28 </article></div>";
        graph7_left.innerHTML = " <article class=\"message\"> \
      <div class=\"message-header\">\
        <p>运营商持有的秘密分享值</p>\
      </div>\
      <div class=\"message-body\">\
      596071460387644702</br>\
                          3790961304588408706</br>\
                          1266773640427851228</br>\
                          10541076035092016859</br>\
                          5150608910754678075</br>\
                          10300700036066125690</br>\
                          8248695673238283270</br>\
                          6584351678409812655</br>\
                          7509542019401838602 </div>\
                          </article> ";
        graph7_right.innerHTML = " <article class=\"message\"> \
      <div class=\"message-header\">\
        <p>银行持有的秘密分享值</p>\
      </div>\
      <div class=\"message-body\">\
                              17071701641114077147</br>\
                          17850672613322332898</br>\
                          14655782769122774644</br>\
                          17179970433282028068</br>\
                          7905668038619106725</br>\
                          13296135162955122373</br>\
                          8146044037645240646</br>\
                          10198048400472676986</br>\
                          11862392395300732241</br>\
                          10937202054309591862</div>\
                          </article> ";
    }
    var info3 = function () {
        graph7_down.innerHTML = "<article class=\"message\"> \
      <div class=\"message-body\">两方秘密分享值对应的节点明文权值</br>105 34 145 23 140 28 168 127 99 153 </article></div>";
        graph7_left.innerHTML = " \
                        <article class=\"message\"> \
                          <div class=\"message-header\">\
                            <p>运营商持有的秘密分享值</p>\
                          </div>\
                          <div class=\"message-body\">\
                          6716934397314863658</br>\
                          7940900382591738299</br>\
                          12746118511619535570</br>\
                          5651954644930530760</br>\
                          2947043376756866174</br>\
                          10155977032346689052</br>\
                          14214934311857787396</br>\
                          835380965503589985</br>\
                          13715897810983276509</div>\
                        </article> ";
        graph7_right.innerHTML = " <article class=\"message\"> \
      <div class=\"message-header\">\
        <p>银行持有的秘密分享值</p>\
      </div>\
      <div class=\"message-body\">\
                              11729809676968308182</br>\
                          10505843693564783045</br>\
                          5700625562492407086</br>\
                          12794789431144411960</br>\
                          15499700697434110338</br>\
                          8290767044193697892</br>\
                          4231809763994168828</br>\
                          17611363109879052447</br>\
                          4730846265296694115</div>\
                          </article> ";
    }
    var info4 = function () {
        graph7_down.innerHTML = "<article class=\"message\"> \
      <div class=\"message-body\">两方秘密分享值对应的节点明文权值</br>634 202 834 167 810 174 1010 764 598 928 </article></div>";
        graph7_left.innerHTML = " <article class=\"message\"> \
      <div class=\"message-header\">\
        <p>运营商持有的秘密分享值</p>\
      </div>\
      <div class=\"message-body\">\
      7326589654212921807</br>\
                          3111473883903087854</br>\
                          14304918316917386737</br>\
                          13647592385214360948</br>\
                          12462902373370077557</br>\
                          13575322318504262397</br>\
                          17665713966144601081</br>\
                          16636394224370190772</br>\
                          8145128300787949557</div>\
                          </article> ";
        graph7_right.innerHTML = " <article class=\"message\"> \
      <div class=\"message-header\">\
        <p>银行持有的秘密分享值</p>\
      </div>\
      <div class=\"message-body\">\
                              11120155291037251121</br>\
                          15335273772733928594</br>\
                          4141826476028137999</br>\
                          4799155170787545740</br>\
                          5983842450008497803</br>\
                          4871426097036768515</br>\
                          781033392175236103</br>\
                          1810352420349070156</br>\
                          10301619760973752971</div>\
                          </article>  ";
    }
    var info5 = function () {
        graph7_down.innerHTML = "<article class=\"message\"> \
      <div class=\"message-body\">两方秘密分享值对应的节点明文权值</br>3960 1213 4948 1040 4807 1008 6217 4701 3508 5541</article></div>";
        graph7_left.innerHTML = " <article class=\"message\"> \
      <div class=\"message-header\">\
        <p>运营商持有的秘密分享值</p>\
      </div>\
      <div class=\"message-body\">\
      2166341788709961208</br>\
                          16003971246947833695</br>\
                          17997590282097034051</br>\
                          5331464345546358722</br>\
                          17794782537486065859</br>\
                          15846104023506863638</br>\
                          17331776619593387342</br>\
                          1231894834202205888</br>\
                          17616759544759845591</div>\
                          </article> ";
        graph7_right.innerHTML = " <article class=\"message\"> \
      <div class=\"message-header\">\
        <p>银行持有的秘密分享值</p>\
      </div>\
      <div class=\"message-body\">\
                              16281736908257346056</br>\
                            2448214264534521761</br>\
                            450297492372028605</br>\
                            13120565736307621950</br>\
                            653070680924561213</br>\
                            2607476239048014314</br>\
                            1120136968378102450</br>\
                            17218706398636286272</br>\
                            836077406408863017</div>\
                            </article>  ";
    }
    btn7.onclick = function () {
        var i = 0;
        for (len = left.length; i < len; ++i) {
            if (document.getElementById(left[i]).style.display == "block")
                document.getElementById(left[i]).style.display = "none";
        }
        i = 0;
        for (len = right.length; i < len; ++i) {
            if (document.getElementById(right[i]).style.display == "block")
                document.getElementById(right[i]).style.display = "none";
        }


        document.getElementById('graph7_left').style.display = "block";
        document.getElementById('graph7_right').style.display = "block";
        document.getElementById('graph7_down').style.display = "block";
        document.getElementById('useless').style.display = "block";
        info0();
        setTimeout(function () {
            info1();
            setTimeout(function () {
                info2();
                setTimeout(function () {
                    info3();
                    setTimeout(function () {
                        info4();
                        setTimeout(function () {
                            info5();
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }
    btn8.onclick = function () {
        var i = 0;
        for (len = right.length; i < len; ++i) {
            if (document.getElementById(right[i]).style.display == "block")
                document.getElementById(right[i]).style.display = "none";
        }
        document.getElementById("graph4_left").style.display = "none";
        document.getElementById("graph6_left").style.display = "none";
        document.getElementById("graph7_left").style.display = "none";
        document.getElementById("useless").style.display = "none";
        document.getElementById("graph8").style.display = "block";
        graph8.clear();
        graph8.setOption(option8);
    }


    //自动播放 ********************************************************************************
    {
        window.setTimeout(function f1() {
            for (var i = 0; i < btns.length; i++) {
                btns[i].classList.remove('is-danger');
                btns[i].classList.add('is-info');
            }
            btn1.classList.remove('is-info');
            btn1.classList.add('is-danger');
            var i = 0;
            for (len = left.length; i < len; ++i) {
                document.getElementById(left[i]).style.display = "none";
            }
            document.getElementById("graph4_right").style.display = "none";
            document.getElementById("graph6_right").style.display = "none";
            document.getElementById("graph7_right").style.display = "none";
            document.getElementById("graph7_down").style.display = "none";
            document.getElementById("graph1").style.display = "block";
            graph1.clear();
            graph1.setOption(option1);
        }, 2000)
        window.setTimeout(function f2() {
            for (var i = 0; i < btns.length; i++) {
                btns[i].classList.remove('is-danger');
                btns[i].classList.add('is-info');
            }
            btn2.classList.remove('is-info');
            btn2.classList.add('is-danger');
            var i = 0;
            for (len = right.length; i < len; ++i) {
                if (document.getElementById(right[i]).style.display == "block")
                    document.getElementById(right[i]).style.display = "none";
            }
            document.getElementById("graph4_left").style.display = "none";
            document.getElementById("graph6_left").style.display = "none";
            document.getElementById("graph7_left").style.display = "none";
            document.getElementById("useless").style.display = "none";
            document.getElementById("graph2").style.display = "block";
            graph2.clear();
            graph2.setOption(option2);
        }, 4000)
        window.setTimeout(function f3() {
            for (var i = 0; i < btns.length; i++) {
                btns[i].classList.remove('is-danger');
                btns[i].classList.add('is-info');
            }
            btn3.classList.remove('is-info');
            btn3.classList.add('is-danger');
            var i = 0;
            for (len = right.length; i < len; ++i) {
                if (document.getElementById(right[i]).style.display == "block")
                    document.getElementById(right[i]).style.display = "none";
            }
            document.getElementById("graph4_left").style.display = "none";
            document.getElementById("graph6_left").style.display = "none";
            document.getElementById("graph7_left").style.display = "none";
            document.getElementById("useless").style.display = "none";
            document.getElementById("graph3").style.display = "block";
            graph3.clear();
            graph3.setOption(option3);
        }, 6000)
        window.setTimeout(function f4() {
            for (var i = 0; i < btns.length; i++) {
                btns[i].classList.remove('is-danger');
                btns[i].classList.add('is-info');
            }
            btn4.classList.remove('is-info');
            btn4.classList.add('is-danger');
            var i = 0;
            for (len = left.length; i < len; ++i) {
                if (document.getElementById(left[i]).style.display == "block")
                    document.getElementById(left[i]).style.display = "none";
            }
            i = 0;
            for (len = right.length; i < len; ++i) {
                if (document.getElementById(right[i]).style.display == "block")
                    document.getElementById(right[i]).style.display = "none";
            }
            document.getElementById('graph4_left').innerHTML = " <article class=\"message \"> \
                                                    <div class=\"message-header\">\
                                                      <p>运营商持有的秘密分享值</p>\
                                                    </div>\
                                                    <div class=\"message-body\">\
                                                    11911958826217917219</br>\
                                                    15071054034103502725</br>\
                                                    07253452175981048190</br>\
                                                    08027846066151648052</br>\
                                                    10003940641209695129</br>\
                                                    13570528438978301237</br>\
                                                    16894186688485061704</br>\
                                                    18271457441899764598</br>\
                                                    05880481137721788360</br>\
                                                    04622224013459119777\
                                                    </div>\
                                                    </article> ";
            document.getElementById('graph4_right').innerHTML = " <article class=\"message \"> \
                                                    <div class=\"message-header\">\
                                                      <p>银行持有的秘密分享值</p>\
                                                    </div>\
                                                    <div class=\"message-body\">\
                                                    06534785247491634398</br>\
                                                    03375690039606048891</br>\
                                                    11193291897728503427</br>\
                                                    10418898007557903564</br>\
                                                    08442803432499856488</br>\
                                                    04876215634731250379</br>\
                                                    01552557385224489913</br>\
                                                    00175286631809787018</br>\
                                                    12566262935987763257</br>\
                                                    13824520060250431839 \
                                                    </div>\
                                                    </article> ";
            document.getElementById('graph4_left').style.display = "block";
            document.getElementById('graph4_right').style.display = "block";
        }, 8000)
        window.setTimeout(function f5() {
            for (var i = 0; i < btns.length; i++) {
                btns[i].classList.remove('is-danger');
                btns[i].classList.add('is-info');
            }
            btn5.classList.remove('is-info');
            btn5.classList.add('is-danger');
            var i = 0;
            for (len = left.length; i < len; ++i) {
                if (document.getElementById(left[i]).style.display == "block")
                    document.getElementById(left[i]).style.display = "none";
            }
            i = 0;
            document.getElementById("graph4_right").style.display = "none";
            document.getElementById("graph6_right").style.display = "none";
            document.getElementById("graph7_right").style.display = "none";
            document.getElementById("graph7_down").style.display = "none";

            document.getElementById('graph5').style.display = "block";
            graph5.clear();
            graph5.setOption(option5);
        }, 10000)
        window.setTimeout(function f6() {
            for (var i = 0; i < btns.length; i++) {
                btns[i].classList.remove('is-danger');
                btns[i].classList.add('is-info');
            }
            btn6.classList.remove('is-info');
            btn6.classList.add('is-danger');
            var i = 0;
            for (len = left.length; i < len; ++i) {
                if (document.getElementById(left[i]).style.display == "block")
                    document.getElementById(left[i]).style.display = "none";
            }
            i = 0;
            for (len = right.length; i < len; ++i) {
                if (document.getElementById(right[i]).style.display == "block")
                    document.getElementById(right[i]).style.display = "none";
            }
            document.getElementById('graph6_left').innerHTML = " <article class=\"message\"> \
                                                    <div class=\"message-header\">\
                                                      <p>运营商持有的秘密分享值</p>\
                                                    </div>\
                                                    <div class=\"message-body\">\
                                                    05423854815196449431</br>\
                                                    04506128482916344081</br>\
                                                    10173826969657893664</br>\
                                                    16000162035353601432</br>\
                                                    03593941866371356557</br>\
                                                    01213766793450266791</br>\
                                                    12738488773107653374</br>\
                                                    10773168955513364316</br>\
                                                    15113701442327013426</br>\
                                                    09496220332580018339</br>\
                                                    11871612696785822326</br>\
                                                    02070998475956623980</br>\
                                                    03233702796340941369</br>\
                                                    14536735342430658788</br>\
                                                    04670500453013402770</br>\
                                                    17285377250620586451</br>\
                                                              ...\
                                                    </div>\
                                                    </article> ";
            document.getElementById('graph6_right').innerHTML = " <article class=\"message\"> \
                                                    <div class=\"message-header\">\
                                                      <p>银行持有的秘密分享值</p>\
                                                    </div>\
                                                    <div class=\"message-body\">\
                                                    13022889258513102313</br>\
                                                    13940615590793209327</br>\
                                                    08272917104051658720</br>\
                                                    02446582038355950491</br>\
                                                    14852802207338195059</br>\
                                                    17232977280259284825</br>\
                                                    05708255300601898242</br>\
                                                    07673575118196187556</br>\
                                                    03333042631382538190</br>\
                                                    08950523741129533277</br>\
                                                    06575131376923731082</br>\
                                                    16375745597752927636</br>\
                                                    15213041277368610707</br>\
                                                    03910008731278892998</br>\
                                                    13776243620696148948</br>\
                                                    01161366823088965165</br>\
                                                            ...\
                                                    </div>\
                                                    </article> ";
            document.getElementById('graph6_left').style.display = "block";
            document.getElementById('graph6_right').style.display = "block";
        }, 12000)
        window.setTimeout(function f7() {
            for (var i = 0; i < btns.length; i++) {
                btns[i].classList.remove('is-danger');
                btns[i].classList.add('is-info');
            }
            btn7.classList.remove('is-info');
            btn7.classList.add('is-danger');
            var i = 0;
            for (len = left.length; i < len; ++i) {
                if (document.getElementById(left[i]).style.display == "block")
                    document.getElementById(left[i]).style.display = "none";
            }
            i = 0;
            for (len = right.length; i < len; ++i) {
                if (document.getElementById(right[i]).style.display == "block")
                    document.getElementById(right[i]).style.display = "none";
            }


            document.getElementById('graph7_left').style.display = "block";
            document.getElementById('graph7_right').style.display = "block";
            document.getElementById('graph7_down').style.display = "block";
            document.getElementById('useless').style.display = "block";
            info0();
            setTimeout(function () {
                info1();
                setTimeout(function () {
                    info2();
                    setTimeout(function () {
                        info3();
                        setTimeout(function () {
                            info4();
                            setTimeout(function () {
                                info5();
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 15000)
        window.setTimeout(function f8() {
            for (var i = 0; i < btns.length; i++) {
                btns[i].classList.remove('is-danger');
                btns[i].classList.add('is-info');
            }
            btn8.classList.remove('is-info');
            btn8.classList.add('is-danger');
            var i = 0;
            for (len = right.length; i < len; ++i) {
                if (document.getElementById(right[i]).style.display == "block")
                    document.getElementById(right[i]).style.display = "none";
            }
            document.getElementById("graph4_left").style.display = "none";
            document.getElementById("graph6_left").style.display = "none";
            document.getElementById("graph7_left").style.display = "none";
            document.getElementById("useless").style.display = "none";
            document.getElementById("graph8").style.display = "block";
            graph8.clear();
            graph8.setOption(option8);
        }, 18000)
        window.setTimeout(function f9() {
            location.assign('./index.html');
        }, 21000)
    }
}