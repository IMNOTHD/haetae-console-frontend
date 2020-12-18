<template>
  <div class="page">
    <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-model-item label="活动名称">
        <a-input v-model="form.name" placeholder="Please insert activity name"/>
      </a-form-model-item>
      <a-form-model-item label="活动地点">
        <a-input v-model="form.name" placeholder="Please insert activity zone"/>
      </a-form-model-item>
      <a-form-model-item label="举办单位">
        <a-select v-model="form.region" placeholder="Please select your organization">
          <a-select-option value="shanghai">
            Zone one
          </a-select-option>
          <a-select-option value="beijing">
            Zone two
          </a-select-option>
        </a-select>
      </a-form-model-item>

      <a-form-model-item label="活动类型">
        <a-radio-group button-style="solid" v-model="form.type">
          <a-radio-button value="a">
            Hangzhou
          </a-radio-button>
          <a-radio-button value="b">
            Shanghai
          </a-radio-button>
          <a-radio-button value="c">
            Beijing
          </a-radio-button>
          <a-radio-button value="d">
            Chengdu
          </a-radio-button>
        </a-radio-group>
      </a-form-model-item>
      <a-form-model-item label="活动学期">
        <a-input v-model="form.name" placeholder="Please insert activity term"/>
      </a-form-model-item>
      <a-form-model-item label="活动时间">
        <a-range-picker
            :show-time="{ format: 'HH:mm' }"
            format="YYYY-MM-DD HH:mm"
            :placeholder="['Start Time', 'End Time']"
            @change="onChange"
        />
      </a-form-model-item>
      <a-form-model-item label="备注">
        <a-input v-model="form.desc" type="textarea" placeholder="Other" />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmit">
          Create
        </a-button>
        <a-button style="margin-left: 10px;">
          Cancel
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
export default {
  name: "ActivityCreate",
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        name: '',
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        startTime: "",
        endTime: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!', this.form);
    },
    onChange(value, dateString) {
      this.form.startTime = dateString[0];
      this.form.endTime = dateString[1];
    },
  },
}
</script>

<style scoped>
.page {
  padding: 30px;
}
</style>
