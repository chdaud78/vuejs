<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <li></li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 'jea',
          name: 'Park Jaehyun',
          phone: '010 1234 5678',
          email: 'jae@naver.com',
        },
        {
          id: 'chong',
          name: 'Park Chongmyeong',
          phone: '010 9876 5432',
          email: 'chong@naver.com',
        }
      ]
    };
  },
};
</script>
