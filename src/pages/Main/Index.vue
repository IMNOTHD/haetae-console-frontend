<template>
  <div class="page">
    <a-layout>
      <a-layout-content>
        <a-row type="flex" justify="space-between" :gutter="24">
          <a-col :span="6">
            <div class="echarts-scale" style="padding-bottom: 70%">
              <v-chart :options="schoolActivity" :autoresize="true"/>
            </div>
          </a-col>
          <a-col :span="6">
            <div class="echarts-scale" style="padding-bottom: 70%">
              <v-chart :options="lectureActivity" :autoresize="true"/>
            </div>
          </a-col>
          <a-col :span="6">
            <div class="echarts-scale" style="padding-bottom: 70%">
              <v-chart :options="practiceActivity" :autoresize="true"/>
            </div>
          </a-col>
          <a-col :span="6">
            <div class="echarts-scale" style="padding-bottom: 70%">
              <v-chart :options="volunteerWork" :autoresize="true"/>
            </div>
          </a-col>
        </a-row>
      </a-layout-content>
      <a-layout-content class="full-line-part">
        <a-layout>
          <a-layout-header>
            <a-row>
              <a-col :span="8">
                <a-menu v-model="current" mode="horizontal" style="font-size: 16px; padding: 0 5px;">
                  <a-menu-item key="activity">
                    活动章发放
                  </a-menu-item>
                  <a-menu-item key="pageView">
                    访问量
                  </a-menu-item>
                </a-menu>
              </a-col>
              <a-col :span="16" style="border-bottom: 1px solid #e8e8e8;">
                <div style="float: right; padding-right: 16px;">
                  <a-config-provider :auto-insert-space-in-button="false">
                    <a-button-group>
                      <a-button type="link">
                        今日
                      </a-button>
                      <a-button type="link">
                        本周
                      </a-button>
                      <a-button type="link">
                        本月
                      </a-button>
                      <a-button type="link">
                        全年
                      </a-button>
                    </a-button-group>
                  </a-config-provider>
                  <a-range-picker/>
                </div>
              </a-col>
            </a-row>
          </a-layout-header>
          <a-layout-content>
            <a-row type="flex" justify="space-around" align="middle">
              <a-col :span="16">
                <div class="echarts-scale" style="padding-bottom: 38%">
                  <v-chart :options="dailyStamp" :autoresize="true"/>
                </div>
              </a-col>
              <a-col :span="8">
                <div class="echarts-scale" style="padding-bottom: 70%">
                  <v-chart :options="percentCollage" :autoresize="true"/>
                </div>
              </a-col>
            </a-row>
          </a-layout-content>
        </a-layout>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/graphic'

export default {
  name: "Index",
  data() {
    let emphasisStyle = {
      itemStyle: {
        barBorderWidth: 1,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0,0,0,0.5)'
      }
    };

    return {
      current: ['activity'],
      schoolActivity: {
        title: {
          text: '6859',
          textStyle: {
            fontWeight: 400,
            fontSize: 24,
            fontFamily: 'Arial Normal',
          },
          subtext: '校园活动章',
          subtextStyle: {
            fontSize: 16,
          },
          itemGap: 12,
          padding: 25,
        },
        grid: {
          top: 100,
          bottom: 30,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          }
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          show: false,
        },
        series: [{
          name: '活动章数量',
          data: [120, 100, 50, 80, 70, 110, 30],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)',
          },
          emphasis: emphasisStyle,
          itemStyle: {
            normal: {
              color: '#1890ff',
            }
          },
        }],
        backgroundColor: '#ffffff',
      },
      lectureActivity: {
        title: {
          text: '7468',
          textStyle: {
            fontWeight: 400,
            fontSize: 24,
            fontFamily: 'Arial Normal',
          },
          subtext: '讲座活动章',
          subtextStyle: {
            fontSize: 16,
          },
          itemGap: 12,
          padding: 25,
        },
        grid: {
          top: 100,
          bottom: 30,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          }
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          show: false
        },
        series: [{
          name: '活动章数量',
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)',
          },
          emphasis: emphasisStyle,
          itemStyle: {
            normal: {
              color: '#1890ff',
            }
          },
        }],
        backgroundColor: '#ffffff',
      },
      practiceActivity: {
        title: {
          text: '1025',
          textStyle: {
            fontWeight: 400,
            fontSize: 24,
            fontFamily: 'Arial Normal',
          },
          subtext: '志愿时长',
          subtextStyle: {
            fontSize: 16,
          },
          itemGap: 12,
          padding: 25,
        },
        grid: {
          top: 100,
          bottom: 30,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          }
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          show: false
        },
        series: [{
          name: '活动章数量',
          data: [120, 100, 357, 80, 70, 57, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)',
          },
          emphasis: emphasisStyle,
          itemStyle: {
            normal: {
              color: '#1890ff',
            }
          },
        }],
        backgroundColor: '#ffffff',
      },
      volunteerWork: {
        title: {
          text: '5847',
          textStyle: {
            fontWeight: 400,
            fontSize: 24,
            fontFamily: 'Arial Normal',
          },
          subtext: '社会实践活动章',
          subtextStyle: {
            fontSize: 16,
          },
          itemGap: 12,
          padding: 25,
        },
        grid: {
          top: 100,
          bottom: 30,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          }
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          show: false
        },
        series: [{
          name: '活动章数量',
          data: [120, 45, 150, 43, 257, 150, 78],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)',
          },
          emphasis: emphasisStyle,
          itemStyle: {
            normal: {
              color: '#1890ff',
            }
          },
        }],
        backgroundColor: '#ffffff',
      },
      percentCollage: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          show: true,
          orient: 'vertical',
          right: 20,
          top: 10,
          data: ['计算机学院', '经济学院', '机械工程学院', '管理学院', '电子工程学院', '专升本'],
        },
        graphic: {
          type: 'text',
          top: 'center',
          left: 'center',
          style: {
            text: '总章数\n\n12345',
            fill: '#777',
            fontSize: 16,
            fontWeight: 'bold'
          }
        },
        series: [
          {
            name: '学院分布',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            emphasis: {
              label: {
                show: true,
                fontSize: 15,
                fontWeight: 'bold'
              },
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              }
            },
            data: [
              {value: 335, name: '计算机学院'},
              {value: 310, name: '经济学院'},
              {value: 234, name: '机械工程学院'},
              {value: 135, name: '管理学院'},
              {value: 548, name: '电子工程学院'},
              {value: 250, name: '专升本'}
            ],
          }
        ]
      },
      dailyStamp: {
        title: {
          text: '日发放趋势',
          textStyle: {
            fontWeight: 400,
            fontSize: 24,
            fontFamily: 'Arial Normal',
          },
          itemGap: 12,
          padding: 25,
        },
        grid: {
          top: 80,
          bottom: 30,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          }
        },
        xAxis: {
          type: 'category',
          data: ['0点', '2点', '4点', '6点', '8点', '10点', '12点', '14点', '16点', '18点', '20点', '22点'],
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: '活动章数量',
          data: [120, 45, 150, 43, 257, 150, 78, 85, 74, 89, 201, 87],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)',
          },
          barWidth: '40%',
          emphasis: emphasisStyle,
          itemStyle: {
            normal: {
              color: '#c23531',
            }
          },
        }],
        backgroundColor: '#ffffff',
      },
    }
  },
}
</script>

<style scoped>
.ant-layout {
  background: none !important;
}

.ant-layout-header {
  padding: 0 !important;
  background: none !important;
  height: auto !important;
  line-height: 47px !important;
}

/* 这个class的作用是限制echarts图片的宽高比, 使用方法是加上这个class, 然后按需求比例设定padding-bottom, 默认4:3 */
.echarts-scale {
  width: 100%;
  padding-bottom: 75%;
  height: 0;
  position: relative;
}

.echarts {
  width: 100%;
  height: 100%;
  position: absolute;
}

.full-line-part {
  background-color: #ffffff;
  margin-top: 30px;
}
</style>

<style lang="less" scoped>
.page {
  height: 100%;
  padding: 0 30px;

  & {
    background-color: #f0f2f5;
  }
}
</style>
