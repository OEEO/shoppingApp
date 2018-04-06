<template>
    <div class="add-new-address">
      <header>
        <span class="toProfile" @click="toProfile">
            <i class="el-icon-arrow-left" ></i>
        </span>
        <h3>新增收货地址</h3>
      </header>
      <main>
        <el-form :model="newAddForm" :rules="rules" :label-position="'left'" ref="newAddForm" label-width="100px" class="newAddForm">
          <el-form-item label="收货人" prop="name">
            <el-input v-model="newAddForm.name"></el-input>
          </el-form-item>
          <el-form-item label="电话" prop="phone">
            <el-input v-model.number="newAddForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="所在城市" prop="city">
            <el-input v-model="newAddForm.city"></el-input>
          </el-form-item>
          <el-form-item label="收货地址" prop="detailAdd">
            <el-input v-model="newAddForm.detailAdd"></el-input>
          </el-form-item>
        </el-form>
      </main>
      <footer>
        <el-form>
          <el-form-item>
            <el-button type="primary" @click="submitForm('newAddForm')">保存收货地址</el-button>
            <el-button type="danger" @click="resetForm('newAddForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </footer>
    </div>
</template>

<script>
export default {
  data() {
    let validatePhone = (rule, value, callback) => {
        if (!value) {
            return callback(new Error('手机号不能为空'));
        } else if (!/^1[3-9]{1}[0-9]{9}$/.test(value)) {
            return callback(new Error('手机号不正确'));
        } else {
            callback();
        }
    };
    return {
      newAddForm: {
        name: '',
        phone: '',
        city: '',
        detailAdd: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入名字', trigger: 'blur' }
        ],
        phone: [
          {required: true, validator: validatePhone, trigger: 'blur'}
        ],
        city: [
          { required: true, message: '请输入所在城市', trigger: 'blur' }
        ],
        detailAdd: [
          { required: true, message: '请输入详细地址', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    toProfile () {
      this.$router.push({
        path: '/Profile/EditAddressPage'
      })
      //解决主页与详情页切换时，菜单栏无法更新获取当前路由的问题
      this.$store.state.cartCounter++;
      this.$store.state.cartCounter--;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.commit('addNewAddress', this.newAddForm);
          this.$router.push({
            path: '/Profile/EditAddressPage'
          })
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }

}
</script>

<style lang="scss" scoped>
@import "../assets/css/variable.scss";

.add-new-address{
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1001;
  background-color: #f5f5f5;
  header{
    position: relative;
    height: 50px;
    line-height: 50px;
    background-color: #fff;

    .toProfile i{
      position: absolute;
      left: 10px;
      font-size: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  main{
    background-color: #fff;
    margin-top: 10px;
    padding: 10px;
  }
  footer{
    margin-top: 50px;
  }
}
</style>