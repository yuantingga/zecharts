<template>
   <div class="container">
    <div class="header">
      <img src="../images/logo.png" alt="">
    </div>
    <div class="main">
      <div class="deviceManager">
        <div class="equipment"></div>
        <div class="chart">
          <div class="List">
            <div class="abnormal">
              <span >故障设备监控</span><span>|</span><span >异常设备监控</span>
            </div>
            <div class="errorListing">
              <div class="title">
                <span>故障时间</span>
                <span>设备时间</span>
                <span>异常代码</span>
              </div>
              <div class="AnimationContainer">
                <div class="faultMessage">
                  
                </div>
              </div>
            </div>
          </div>
          <div class="ItsMessage">
            <p class="inode">点位信息图</p>
           <div class="dendrogram">
            <div class="Nightingale"></div>
            <div class="PointDeviceInformation">
              <div>
                <p>1224</p>
                <span class="iconfont icon-xiangshang" style="color: red;"></span>
                <span>设备总数</span>
              </div>
              <div>
                <p>1222</p>
                <span class="iconfont icon-xiangshang" style="color: red;" ></span>
                <span>设备总数</span>
              </div>
            </div>
           </div>
          </div>
        </div>
      </div>
      <div class="map">
        <div class="chinaMap"></div>
        <div class="ListInformation"></div>
      </div>
      <div class="Rightmodule">
        <div class="equipment"></div>
        <div class="chart">
          <div class="List"></div>
          <div class="ItsMessage"></div>
        </div>
        <div class="ranking"></div>
      </div>
    </div>
  </div>
</template>


