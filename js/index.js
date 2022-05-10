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
    const Y = $('.faultMessage')[0].offsetHeight - $('.AnimationContainer')[0].offsetHeight-gundong
    
    clearInterval(time)
    moveFun($(".faultMessage"),-Y,10)
  })
  $(document).on("touchend",function(){
    const Y = $('.faultMessage')[0].offsetHeight - $('.AnimationContainer')[0].offsetHeight-gundong
    
    clearInterval(time)
    moveFun($(".faultMessage"),-Y,10)
  })

  //南丁格尔图的绘制
  //需要移入echarts.js 获取盒子进行填充图表

  const MyEcharts=echarts.init($(".Nightingale")[0])
  const option = {
    tooltip:{
      trigger:"item",
      formatter:'地区:{b}'
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
          borderRadius: 7
        },
        data: [
          { value: 40, name: '北京'},
          { value: 38, name: '上海' },
          { value: 32, name: '广东' },
          { value: 30, name: '四川' },
          { value: 28, name: '东北' },
          { value: 26, name: '河南' },
          { value: 22, name: '陕西' },
          { value: 18, name: '湖南' }
        ]
      }
    ]
  };
  MyEcharts.setOption(option)

  //设置中国地图
  //需要移入china.js 
  //mymap.js配置项加选择元素


  //列表信息图



  document.onresize=function () { 
    MyEcharts.resize()
  }
})
