$(function () {
  let time
  const arr = [2334, 1111, 333, 4653]
  //第一个设备数的渲染html结构
  $.each(arr, function (index, ele) {
    const str = `<div class="EquipmentNumber"><div class="Num">${ele}</div>
        <div class="deviceNum">
             <span>设备总数</span>
          </div>
        </div>`
    $('.deviceManager .equipment').append(str)
  })

  const faultMessageList = [
    {
      time: ' 2012/12/1',
      site: '广东省韶关市浈江区茶山矿北区203号',
      serial: 212311211,
    },
    {
      time: ' 2012/12/1',
      site: '广东省韶关市浈江区茶山矿北区203号',
      serial: 212311211,
    },
    {
      time: ' 2012/12/1',
      site: '广东省韶关市浈江区茶山矿北区203号',
      serial: 212311211,
    },
    {
      time: ' 2012/12/1',
      site: '广东省韶关市浈江区茶山矿北区203号',
      serial: 212311211,
    },
    {
      time: ' 2012/12/1',
      site: '广东省韶关市浈江区茶山矿北区203号',
      serial: 212311211,
    },
    {
      time: ' 2012/12/1',
      site: '广东省韶关市浈江区茶山矿北区203号',
      serial: 212311211,
    },
    {
      time: ' 2012/12/1',
      site: '广东省韶关市浈江区茶山矿北区203号',
      serial: 212311211,
    },
    {
      time: ' 2012/12/1',
      site: '广东省韶关市浈江区茶山矿北区203号',
      serial: 212311211,
    },
    {
      time: ' 2012/12/1',
      site: '广东省韶关市浈江区茶山矿北区203号',
      serial: 212311211,
    },
    {
      time: ' 2012/12/1',
      site: '广东省韶关市浈江区茶山矿北区203号',
      serial: 212311211,
    },
    {
      time: ' 2012/12/1',
      site: '广东省韶关市浈江区茶山矿北区203号',
      serial: 212311211,
    },
    {
      time: ' 2012/12/1',
      site: '广东省韶关市浈江区茶山矿北区203号',
      serial: 212311211,
    },
    {
      time: ' 2012/12/1',
      site: '广东省韶关市浈江区茶山矿北区203号',
      serial: 212311211,
    },
    {
      time: ' 2012/12/1',
      site: '广东省韶关市浈江区茶山矿北区203号',
      serial: 212311211,
    },
  ]
  const fault = [
    {
      time: ' 2019/11/10',
      site: '河北省天津市浈江区茶山矿北区203号',
      serial: 12121233331,
    },
    {
      time: ' 2019/11/10',
      site: '河北省天津市浈江区茶山矿北区203号',
      serial: 12121233331,
    },
    {
      time: ' 2019/11/10',
      site: '河北省天津市浈江区茶山矿北区203号',
      serial: 12121233331,
    },
    {
      time: ' 2019/11/10',
      site: '河北省天津市浈江区茶山矿北区203号',
      serial: 12121233331,
    },
    {
      time: ' 2019/11/10',
      site: '河北省天津市浈江区茶山矿北区203号',
      serial: 12121233331,
    },
    {
      time: ' 2019/11/10',
      site: '河北省天津市浈江区茶山矿北区203号',
      serial: 12121233331,
    },
    {
      time: ' 2019/11/10',
      site: '河北省天津市浈江区茶山矿北区203号',
      serial: 12121233331,
    },
    {
      time: ' 2019/11/10',
      site: '河北省天津市浈江区茶山矿北区203号',
      serial: 12121233331,
    },
    {
      time: ' 2019/11/10',
      site: '河北省天津市浈江区茶山矿北区203号',
      serial: 12121233331,
    },
    {
      time: ' 2019/11/10',
      site: '河北省天津市浈江区茶山矿北区203号',
      serial: 12121233331,
    },

    {
      time: ' 2019/11/10',
      site: '河北省天津市浈江区茶山矿北区203号',
      serial: 12121233331,
    },
    {
      time: ' 2019/11/10',
      site: '河北省天津市浈江区茶山矿北区203号',
      serial: 12121233331,
    },
  ]
  // 动画移动，
  $('.abnormal').on('click', 'span', function () {
    let index = $(this).index()
    $(this).css('color', 'blue')
    $(this).siblings().css('color', 'white')
    if (index == 0) {
      RenderData(faultMessageList)
    } else if (index == 2) {
      RenderData(fault)
    }
    clearInterval(time)
    const Y = $('.faultMessage')[0].offsetHeight - $('.AnimationContainer')[0].offsetHeight
    moveFun($('.faultMessage'), -Y, 10)
  })
  $('.abnormal span').eq(0).css('color', 'blue')
  //渲染故障设备数据，以及切换故障设备以及异常设备
  RenderData(faultMessageList)
  function RenderData(data) {
    $('.faultMessage').html('')
    $.each(data, function (index, ele) {
      let div = `<div class="faultMessageList"></div>`
      $('.faultMessage').append(div)
      for (let i in ele) {
        let span = `<span>${ele[i]}</span>`
        $('.faultMessage .faultMessageList').eq(index).append(span)
      }
    })
  }

  // 要注意不能书写在上面，没有添加就获取不到宽度
  const Y = $('.faultMessage')[0].offsetHeight - $('.AnimationContainer')[0].offsetHeight
  moveFun($('.faultMessage'), -Y, 10)

  // 实现动画、移动(盒子的宽度-内容的宽度就是移动的距离) d动画进行或者定时器都可以

  function moveFun(obj, end, distance) {
    clearInterval(time)
    time = setInterval(function () {
      let top = parseInt(obj.css('top'))

      if (top > end) {
        top -= 5
        obj.css('top', top)
      } else {
        obj.css('top', '0px')
      }
    }, 150)
  }
  //触发触摸事件或是鼠标移入事件就停止定时器
  $('.AnimationContainer').on('mouseenter touchstart', function (e) {
    e.preventDefault()
    clearInterval(time)
  })

  //触摸离开，鼠标移出开启定时器的滚动
  $('.AnimationContainer').on('mouseleave ', function () {
    const Y = $('.faultMessage')[0].offsetHeight - $('.AnimationContainer')[0].offsetHeight

    clearInterval(time)
    moveFun($('.faultMessage'), -Y, 10)
  })
  $(document).on('touchend', function () {
    const Y = $('.faultMessage')[0].offsetHeight - $('.AnimationContainer')[0].offsetHeight

    clearInterval(time)
    moveFun($('.faultMessage'), -Y, 10)
  })

  //南丁格尔图的绘制
  //需要移入echarts.js 获取盒子进行填充图表

  const MyEcharts = echarts.init($('.Nightingale')[0])
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '地区:{b}',
    },
    toolbox: {
      show: true,
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [20, 80],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 7,
        },
        data: [
          { value: 40, name: '北京' },
          { value: 38, name: '上海' },
          { value: 32, name: '广东' },
          { value: 30, name: '四川' },
          { value: 28, name: '东北' },
          { value: 26, name: '河南' },
          { value: 22, name: '陕西' },
          { value: 18, name: '湖南' },
        ],
      },
    ],
  }
  MyEcharts.setOption(option)

  //设置中国地图
  //需要移入china.js
  //mymap.js配置项加选择元素

  //列表信息图
  const MyEcharts2 = echarts.init($('.column')[0])
  const option2 = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'item',
      },
    },
    color: {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: 'cornflowerblue',
        },
        {
          offset: 1,
          color: 'blue',
        },
      ],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      bordercolor: 'white',
    },
    xAxis: [
      {
        type: 'category',
        data: ['上海', '北京', '合肥', '.....', '广东', '湖南', '南京'],
        axisTick: {
          alignWithLabel: true,
        },

        axisLabel: {
          textStyle: {
            color: 'white',
            fontSize: 18,
          },
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0.5)',
          },
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: 'rgba(219,225,255,1)',
            width: 0,
            type: 'solid',
          },
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          textStyle: {
            color: 'white',
            fontSize: 18,
          },
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0.5)',
          },
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0.5)',
          },
        },
      },
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220],
      },
    ],
  }
  MyEcharts2.setOption(option2)

  document.onresize = function () {
    MyEcharts.resize()
    MyEcharts2.resize()
  }

  //实现切换功能
  const sky = [
    [23232, 1111],
    [4444, 554322],
    [2323456, 44874],
    [44444, 33333],
  ]
  $('.Rightmodule .equipment span').eq(0).css('color', 'blue')
  const htmlstr = `<div>
  <p>${sky[0][0]}</p>
  <span class="iconfont icon-xiangshang"style="color: red;" ></span>
  <span>设备总数</span>
</div>
<div>
  <p>${sky[0][1]}</p>
  <span class="iconfont icon-xiangshang"style="color: red;" ></span>
  <span>设备总数</span>
</div>`
 
  $('.device').html(htmlstr)


  $('.Rightmodule .equipment').on('click ', 'span', function () {
    $(this).css("color","blue").siblings().css("color","white")

    const index = $(this).attr("data-index")
    console.log(index);
    const htmlstr = `<div>
  <p>${sky[index][0]}</p>
  <span class="iconfont icon-xiangshang"style="color: red;" ></span>
  <span>设备总数</span>
</div>
<div>
  <p>${sky[index][1]}</p>
  <span class="iconfont icon-xiangshang"style="color: red;" ></span>
  <span>设备总数</span>
</div>`
$('.device').html('')
  $('.device').html(htmlstr)
  })

  // 实现点击切换数据，轮播展示数据，鼠标移入停止定时器轮播， 离开继续轮播

  const data1=[
    [[820, 932, 901, 934, 1290, 1330, 1320],[220, 432, 601, 34, 190, 1330, 1320]],
    [[320, 32, 501, 634, 34, 222, 544],[857, 322, 601, 342, 490, 330, 1320]],
    [[220, 312, 1501, 634, 334, 222, 544],[857, 342, 601, 342, 490, 330, 1320]],
    [[857, 342, 601, 342, 490, 330, 1320],[220, 312, 1501, 634, 334, 222, 544]],
  ];
  
  let one=data1[0][0];
  let two=data1[0][1];
  let inn=1
  let obj={};
  const option3 = {
    title: {
      text: '单位 年',
      textStyle:{ 
        color:'white',
        fontStyle:'',
        fontWeight:400
      },
      top:15
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      top:15,
      textStyle:{ 
        color:'white',
        fontSize:'14',
       
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '3月', '5月', '7月', '9月', '11月'],
      axisTick: {
          show: false
      },
      axisLabel: {
          color: "rgba(100,149,237)"
      },
      axisLine: {
          lineStyle: {
              color: "rgba(100,149,237,0.3)"
          },
          show: false,
      },
  },
  yAxis: {
      type: 'value',
      axisLabel: {
          color: "rgba(100,149,237)"
      },
      axisLine: {
          lineStyle: {
              color: "rgba(100,149,237,0.3)"
          }
      },
      splitLine: {
          lineStyle: {
              color: "rgba(100,149,237,0.3)"
          }
      }
    },
    series: [
      {
        name: '预计销售额',
        type: 'line',
        stack: 'Total6',
        smooth: true,
        data: one
      },
      {
        name: '实际销售额',
        color:'blue',
        type: 'line',
        stack: 'Total3',
        smooth: true,
        data: two
      },
    ]
  };
  const MyEcharts3=echarts.init($('.curve')[0])
  MyEcharts3.setOption(option3)
  
  $('.List .title').on("click","span",function (e) { 

    e.preventDefault()
    $(this).css("background",'pink').siblings().css("background",'')
    let inn=$(this).attr("data-inn")
    console.log(inn);
    one=data1[inn][0]
    two=data1[inn][1]
   
    MyEcharts3.setOption({
        series: [
          {
            name: '预计销售额',
            type: 'line',
            stack: 'Total6',
            smooth: true,
            data: one
          },
          {
            name: '实际销售额',
            color:'blue',
            type: 'line',
            stack: 'Total3',
            smooth: true,
            data: two
          },
        ]
    })
  })
  // 轮播函数从0 到 3
  $('.List ').on("mouseenter touchstart",function (e) { 
    clearInterval(obj.cutTime)
  })
  $('.List').on('mouseleave touchend',function (e) { 
   console.log("开始");
    cut(inn+1)
  })
  cut(inn)
  function cut(inn) { 
    
    obj.cutTime=setInterval(function () { 
      if(inn>3){
        inn=0
      }
      $(".Rightmodule .chart .title span").eq(inn).css("background",'pink').siblings().css("background",'')
     console.log()
      one=data1[inn][0];
      two=data1[inn][1];
      MyEcharts3.setOption({
        series: [
          {
            name: '预计销售额',
            type: 'line',
            stack: 'Total6',
            smooth: true,
            data: one
          },
          {
            name: '实际销售额',
            color:'blue',
            type: 'line',
            stack: 'Total3',
            smooth: true,
            data: two
          },
        ]
    })
      inn++
     },1000)
  }

  //渠道模块的数据


// Schema:
// date,AQIindex,PM2.5,PM10,CO,NO2,SO2
const dataBJ = [
  [55, 100, 56, 0.6, 67, 20, 1],
 
];

const lineStyle = {
  width: 1,
  opacity: 0.7
};
const option4 = {
  // backgroundColor: '#161627',

  scale: {
      ticks: {
          display: true,
          beginAtZero: true,
          maxTicksLimit: 10,
          stepSize: 25,
      }
  },

  title: {
      text: '渠道模块',
      left: '10px',
      textStyle: {
          color: '#eee',
          fontWeight: 500,
          fontSize: 15,


      }
  },


  radar: {
      indicator: [
          { name: '北京', max: 200 },
          { name: '天津', max: 250 },
          { name: '上海', max: 300 },
          { name: '广州', max: 5 },
          { name: '韶关', max: 100 },
          { name: '云南', max: 100 }
      ],
      center: ["50% ", "50%"],
      radius: "60%",
      shape: 'circle',
      splitNumber: 4,
      axisName: {
          color: "cornflowerblue"
      },
      splitLine: {
          lineStyle: {
              color: [
                  'rgba(255,255,255,0.5)',

              ].reverse()
          }
      },


      splitArea: {
          show: false
      },
      axisLine: {
          lineStyle: {
              color: 'rgba(255,255,255,0.5)'
          }
      }
  },
  tooltip: {
      show: true,
      position: "top"
  },

  series: [{
          name: "Beijing",

          type: 'radar',
          lineStyle: lineStyle,
          data: dataBJ,

          symbol: 'circle',
          symbolSize: "4",
          itemStyle: {
              //小圆点的颜色
              color: '#fff'
          },
          label: {
              show: true,
              fontSize: 10
          },
          areaStyle: {
              opacity: 0.5,
              //修改填充的颜色
              color: "rgba(233, 117, 22,0.6)"
          }
      },

  ]
};

const Myecharts= echarts.init($(".channel")[0])

Myecharts.setOption(option4)
  //cut 自动轮播，要注意
  //热搜榜
  const percent1=500
  const percent2=500

const option5= {
  title: {
    text: '一季度销售模块',
    left: 'center',
    top:"10px",
    textStyle: {
        color: '#eee',
        fontWeight: 500,
        fontSize: 15
    }
},


  series: [
    {
     
      name: 'Access From',
      type: 'pie',
      center:['50%','100%'],
      
      radius: ['100%', '120%'],
      hoverAnimation:false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
        }
      },
      data: [
        { value: percent1, 
        
          itemStyle: {
            normal: { // 渐变色操作
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#f1f1f1' },  // 起始颜色
                    { offset: 1, color: '#f1f1f1' }])  // 结束颜色
            }
        },
        },
        { 
          
          value: percent2, name: '',
          itemStyle: {
              normal: { // 渐变色操作
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      { offset: 0, color: 'blue' },  // 起始颜色
                      { offset: 1, color: 'blue' }])  // 结束颜色
              }
          },
        },
      ]
    }
  ]
};
const MyEcharts4=echarts.init($(".sell div")[0])
MyEcharts4.setOption(option5)

const topDate=[
  [['北京','22.4%'],["上海",'33.4%'],['天津','44.5%'],['广东','55.4%']],
  [['北京','22.4%'],["上海",'33.4%'],['湖南','44.5%'],['广东','55.4%']],
  [['北京','22.4%'],["南岭",'33.4%'],['云南','44.5%'],['广东','55.4%']],
  [['北京','22.4%'],["四川",'33.4%'],['天津','44.5%'],['广东','55.4%']],

]

// 轮播继续切换鼠标悬停停止定时器，鼠标移动到谁之上就切换数据，离开继续开启定时器
$('.bottom .sell p').eq(0).css('background','rgb(17, 141, 218,0.4)')
var pstr='';
$.each(topDate[0],function(index,ele){

 pstr=`<p>${ele[0]}<span>${ele[1]}</span><span style="color: red;" class="iconfont icon-xiangshang"></span></p>`
 $(".day").append(pstr)
})
var num=0
var plan=0
$(".bottom .sell").on("mouseenter touchstart",'p',function (e) { 
  e.preventDefault()
  $(".day").html('')

  $(this).css('background','rgba(17, 141, 218, 0.4)')
  $(this).siblings().css('background','')
  $.each(topDate[$(this).index()],function(index,ele){
    pstr=`<p>${ele[0]}<span>${ele[1]}</span><span style="color: red;" class="iconfont icon-xiangshang"></span></p>`
    $(".day").append(pstr)
  })
  clearInterval(obj.time)
  
})
$(".bottom .sell").on("mouseleave touchend",function () { 
  MultiCitySwitch(num)
 })

// document.ontouchstart

   MultiCitySwitch(0)
   function MultiCitySwitch(index) { 
    num=index
    clearInterval(obj.time)
   
    obj.time=setInterval(function () {
      if(num>3){
        num=0
      }
     
      $('.bottom .sell p').eq(num).css('background','rgba(17, 141, 218, 0.4)').siblings().css('background','')
      $(".day").html('')
      $(".day").html('')
      $.each(topDate[num],function (index,ele) {
           console.log(ele);
           const p=`<p>${ele[0]}<span>${ele[1]}</span><span style="color: red;" class="iconfont icon-xiangshang"></span></p>`
           console.log(p);
           $(".day").append(p)
     })
     num++
    },1000)
   }
})
