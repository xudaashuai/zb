<template>
  <Card class="card">
    <Tabs :value="mType[0]">
      <TabPane v-for="type in mType" :label="type" :key="type" :name="type">
        <Table :height="height" class="table" border :columns="columns10" :data="data9"></Table>
      </TabPane>
    </Tabs>
  </Card>
</template>
<script>
  export default {
    data() {
      return {
        mType: this.$store.state.zb.mType,
        columns10: [
          {
            type: 'expand',
            width: 50,
            render: (h, params) => {
              return h(expandRow, {
                props: {
                  row: params.row
                }
              })
            }
          },
          {
            title: 'Name',
            key: 'name'
          },
          {
            title: 'Age',
            key: 'age'
          },
          {
            title: 'Address',
            key: 'address'
          }
        ],
        data9: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            job: 'Data engineer',
            interest: 'badminton',
            birthday: '1991-05-14',
            book: 'Steve Jobs',
            movie: 'The Prestige',
            music: 'I Cry'
          },
          {
            name: 'Jim Green',
            age: 25,
            address: 'London No. 1 Lake Park',
            job: 'Data Scientist',
            interest: 'volleyball',
            birthday: '1989-03-18',
            book: 'My Struggle',
            movie: 'Roman Holiday',
            music: 'My Heart Will Go On'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            job: 'Data Product Manager',
            interest: 'tennis',
            birthday: '1992-01-31',
            book: 'Win',
            movie: 'Jobs',
            music: 'Don’t Cry'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            job: 'Data Analyst',
            interest: 'snooker',
            birthday: '1988-7-25',
            book: 'A Dream in Red Mansions',
            movie: 'A Chinese Ghost Story',
            music: 'actor'
          },
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            job: 'Data engineer',
            interest: 'badminton',
            birthday: '1991-05-14',
            book: 'Steve Jobs',
            movie: 'The Prestige',
            music: 'I Cry'
          },
          {
            name: 'Jim Green',
            age: 25,
            address: 'London No. 1 Lake Park',
            job: 'Data Scientist',
            interest: 'volleyball',
            birthday: '1989-03-18',
            book: 'My Struggle',
            movie: 'Roman Holiday',
            music: 'My Heart Will Go On'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            job: 'Data Product Manager',
            interest: 'tennis',
            birthday: '1992-01-31',
            book: 'Win',
            movie: 'Jobs',
            music: 'Don’t Cry'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            job: 'Data Analyst',
            interest: 'snooker',
            birthday: '1988-7-25',
            book: 'A Dream in Red Mansions',
            movie: 'A Chinese Ghost Story',
            music: 'actor'
          },
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            job: 'Data engineer',
            interest: 'badminton',
            birthday: '1991-05-14',
            book: 'Steve Jobs',
            movie: 'The Prestige',
            music: 'I Cry'
          },
          {
            name: 'Jim Green',
            age: 25,
            address: 'London No. 1 Lake Park',
            job: 'Data Scientist',
            interest: 'volleyball',
            birthday: '1989-03-18',
            book: 'My Struggle',
            movie: 'Roman Holiday',
            music: 'My Heart Will Go On'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            job: 'Data Product Manager',
            interest: 'tennis',
            birthday: '1992-01-31',
            book: 'Win',
            movie: 'Jobs',
            music: 'Don’t Cry'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            job: 'Data Analyst',
            interest: 'snooker',
            birthday: '1988-7-25',
            book: 'A Dream in Red Mansions',
            movie: 'A Chinese Ghost Story',
            music: 'actor'
          },
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            job: 'Data engineer',
            interest: 'badminton',
            birthday: '1991-05-14',
            book: 'Steve Jobs',
            movie: 'The Prestige',
            music: 'I Cry'
          },
          {
            name: 'Jim Green',
            age: 25,
            address: 'London No. 1 Lake Park',
            job: 'Data Scientist',
            interest: 'volleyball',
            birthday: '1989-03-18',
            book: 'My Struggle',
            movie: 'Roman Holiday',
            music: 'My Heart Will Go On'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            job: 'Data Product Manager',
            interest: 'tennis',
            birthday: '1992-01-31',
            book: 'Win',
            movie: 'Jobs',
            music: 'Don’t Cry'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            job: 'Data Analyst',
            interest: 'snooker',
            birthday: '1988-7-25',
            book: 'A Dream in Red Mansions',
            movie: 'A Chinese Ghost Story',
            music: 'actor'
          },
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            job: 'Data engineer',
            interest: 'badminton',
            birthday: '1991-05-14',
            book: 'Steve Jobs',
            movie: 'The Prestige',
            music: 'I Cry'
          },
          {
            name: 'Jim Green',
            age: 25,
            address: 'London No. 1 Lake Park',
            job: 'Data Scientist',
            interest: 'volleyball',
            birthday: '1989-03-18',
            book: 'My Struggle',
            movie: 'Roman Holiday',
            music: 'My Heart Will Go On'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            job: 'Data Product Manager',
            interest: 'tennis',
            birthday: '1992-01-31',
            book: 'Win',
            movie: 'Jobs',
            music: 'Don’t Cry'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            job: 'Data Analyst',
            interest: 'snooker',
            birthday: '1988-7-25',
            book: 'A Dream in Red Mansions',
            movie: 'A Chinese Ghost Story',
            music: 'actor'
          },
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            job: 'Data engineer',
            interest: 'badminton',
            birthday: '1991-05-14',
            book: 'Steve Jobs',
            movie: 'The Prestige',
            music: 'I Cry'
          },
          {
            name: 'Jim Green',
            age: 25,
            address: 'London No. 1 Lake Park',
            job: 'Data Scientist',
            interest: 'volleyball',
            birthday: '1989-03-18',
            book: 'My Struggle',
            movie: 'Roman Holiday',
            music: 'My Heart Will Go On'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            job: 'Data Product Manager',
            interest: 'tennis',
            birthday: '1992-01-31',
            book: 'Win',
            movie: 'Jobs',
            music: 'Don’t Cry'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            job: 'Data Analyst',
            interest: 'snooker',
            birthday: '1988-7-25',
            book: 'A Dream in Red Mansions',
            movie: 'A Chinese Ghost Story',
            music: 'actor'
          },
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            job: 'Data engineer',
            interest: 'badminton',
            birthday: '1991-05-14',
            book: 'Steve Jobs',
            movie: 'The Prestige',
            music: 'I Cry'
          },
          {
            name: 'Jim Green',
            age: 25,
            address: 'London No. 1 Lake Park',
            job: 'Data Scientist',
            interest: 'volleyball',
            birthday: '1989-03-18',
            book: 'My Struggle',
            movie: 'Roman Holiday',
            music: 'My Heart Will Go On'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            job: 'Data Product Manager',
            interest: 'tennis',
            birthday: '1992-01-31',
            book: 'Win',
            movie: 'Jobs',
            music: 'Don’t Cry'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            job: 'Data Analyst',
            interest: 'snooker',
            birthday: '1988-7-25',
            book: 'A Dream in Red Mansions',
            movie: 'A Chinese Ghost Story',
            music: 'actor'
          },
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            job: 'Data engineer',
            interest: 'badminton',
            birthday: '1991-05-14',
            book: 'Steve Jobs',
            movie: 'The Prestige',
            music: 'I Cry'
          },
          {
            name: 'Jim Green',
            age: 25,
            address: 'London No. 1 Lake Park',
            job: 'Data Scientist',
            interest: 'volleyball',
            birthday: '1989-03-18',
            book: 'My Struggle',
            movie: 'Roman Holiday',
            music: 'My Heart Will Go On'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            job: 'Data Product Manager',
            interest: 'tennis',
            birthday: '1992-01-31',
            book: 'Win',
            movie: 'Jobs',
            music: 'Don’t Cry'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            job: 'Data Analyst',
            interest: 'snooker',
            birthday: '1988-7-25',
            book: 'A Dream in Red Mansions',
            movie: 'A Chinese Ghost Story',
            music: 'actor'
          },
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            job: 'Data engineer',
            interest: 'badminton',
            birthday: '1991-05-14',
            book: 'Steve Jobs',
            movie: 'The Prestige',
            music: 'I Cry'
          },
          {
            name: 'Jim Green',
            age: 25,
            address: 'London No. 1 Lake Park',
            job: 'Data Scientist',
            interest: 'volleyball',
            birthday: '1989-03-18',
            book: 'My Struggle',
            movie: 'Roman Holiday',
            music: 'My Heart Will Go On'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            job: 'Data Product Manager',
            interest: 'tennis',
            birthday: '1992-01-31',
            book: 'Win',
            movie: 'Jobs',
            music: 'Don’t Cry'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            job: 'Data Analyst',
            interest: 'snooker',
            birthday: '1988-7-25',
            book: 'A Dream in Red Mansions',
            movie: 'A Chinese Ghost Story',
            music: 'actor'
          },
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            job: 'Data engineer',
            interest: 'badminton',
            birthday: '1991-05-14',
            book: 'Steve Jobs',
            movie: 'The Prestige',
            music: 'I Cry'
          },
          {
            name: 'Jim Green',
            age: 25,
            address: 'London No. 1 Lake Park',
            job: 'Data Scientist',
            interest: 'volleyball',
            birthday: '1989-03-18',
            book: 'My Struggle',
            movie: 'Roman Holiday',
            music: 'My Heart Will Go On'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            job: 'Data Product Manager',
            interest: 'tennis',
            birthday: '1992-01-31',
            book: 'Win',
            movie: 'Jobs',
            music: 'Don’t Cry'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            job: 'Data Analyst',
            interest: 'snooker',
            birthday: '1988-7-25',
            book: 'A Dream in Red Mansions',
            movie: 'A Chinese Ghost Story',
            music: 'actor'
          },
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            job: 'Data engineer',
            interest: 'badminton',
            birthday: '1991-05-14',
            book: 'Steve Jobs',
            movie: 'The Prestige',
            music: 'I Cry'
          },
          {
            name: 'Jim Green',
            age: 25,
            address: 'London No. 1 Lake Park',
            job: 'Data Scientist',
            interest: 'volleyball',
            birthday: '1989-03-18',
            book: 'My Struggle',
            movie: 'Roman Holiday',
            music: 'My Heart Will Go On'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            job: 'Data Product Manager',
            interest: 'tennis',
            birthday: '1992-01-31',
            book: 'Win',
            movie: 'Jobs',
            music: 'Don’t Cry'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            job: 'Data Analyst',
            interest: 'snooker',
            birthday: '1988-7-25',
            book: 'A Dream in Red Mansions',
            movie: 'A Chinese Ghost Story',
            music: 'actor'
          },
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            job: 'Data engineer',
            interest: 'badminton',
            birthday: '1991-05-14',
            book: 'Steve Jobs',
            movie: 'The Prestige',
            music: 'I Cry'
          },
          {
            name: 'Jim Green',
            age: 25,
            address: 'London No. 1 Lake Park',
            job: 'Data Scientist',
            interest: 'volleyball',
            birthday: '1989-03-18',
            book: 'My Struggle',
            movie: 'Roman Holiday',
            music: 'My Heart Will Go On'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            job: 'Data Product Manager',
            interest: 'tennis',
            birthday: '1992-01-31',
            book: 'Win',
            movie: 'Jobs',
            music: 'Don’t Cry'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            job: 'Data Analyst',
            interest: 'snooker',
            birthday: '1988-7-25',
            book: 'A Dream in Red Mansions',
            movie: 'A Chinese Ghost Story',
            music: 'actor'
          },
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            job: 'Data engineer',
            interest: 'badminton',
            birthday: '1991-05-14',
            book: 'Steve Jobs',
            movie: 'The Prestige',
            music: 'I Cry'
          },
          {
            name: 'Jim Green',
            age: 25,
            address: 'London No. 1 Lake Park',
            job: 'Data Scientist',
            interest: 'volleyball',
            birthday: '1989-03-18',
            book: 'My Struggle',
            movie: 'Roman Holiday',
            music: 'My Heart Will Go On'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            job: 'Data Product Manager',
            interest: 'tennis',
            birthday: '1992-01-31',
            book: 'Win',
            movie: 'Jobs',
            music: 'Don’t Cry'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            job: 'Data Analyst',
            interest: 'snooker',
            birthday: '1988-7-25',
            book: 'A Dream in Red Mansions',
            movie: 'A Chinese Ghost Story',
            music: 'actor'
          },
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            job: 'Data engineer',
            interest: 'badminton',
            birthday: '1991-05-14',
            book: 'Steve Jobs',
            movie: 'The Prestige',
            music: 'I Cry'
          },
          {
            name: 'Jim Green',
            age: 25,
            address: 'London No. 1 Lake Park',
            job: 'Data Scientist',
            interest: 'volleyball',
            birthday: '1989-03-18',
            book: 'My Struggle',
            movie: 'Roman Holiday',
            music: 'My Heart Will Go On'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            job: 'Data Product Manager',
            interest: 'tennis',
            birthday: '1992-01-31',
            book: 'Win',
            movie: 'Jobs',
            music: 'Don’t Cry'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            job: 'Data Analyst',
            interest: 'snooker',
            birthday: '1988-7-25',
            book: 'A Dream in Red Mansions',
            movie: 'A Chinese Ghost Story',
            music: 'actor'
          },
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            job: 'Data engineer',
            interest: 'badminton',
            birthday: '1991-05-14',
            book: 'Steve Jobs',
            movie: 'The Prestige',
            music: 'I Cry'
          },
          {
            name: 'Jim Green',
            age: 25,
            address: 'London No. 1 Lake Park',
            job: 'Data Scientist',
            interest: 'volleyball',
            birthday: '1989-03-18',
            book: 'My Struggle',
            movie: 'Roman Holiday',
            music: 'My Heart Will Go On'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            job: 'Data Product Manager',
            interest: 'tennis',
            birthday: '1992-01-31',
            book: 'Win',
            movie: 'Jobs',
            music: 'Don’t Cry'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            job: 'Data Analyst',
            interest: 'snooker',
            birthday: '1988-7-25',
            book: 'A Dream in Red Mansions',
            movie: 'A Chinese Ghost Story',
            music: 'actor'
          },
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            job: 'Data engineer',
            interest: 'badminton',
            birthday: '1991-05-14',
            book: 'Steve Jobs',
            movie: 'The Prestige',
            music: 'I Cry'
          },
          {
            name: 'Jim Green',
            age: 25,
            address: 'London No. 1 Lake Park',
            job: 'Data Scientist',
            interest: 'volleyball',
            birthday: '1989-03-18',
            book: 'My Struggle',
            movie: 'Roman Holiday',
            music: 'My Heart Will Go On'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            job: 'Data Product Manager',
            interest: 'tennis',
            birthday: '1992-01-31',
            book: 'Win',
            movie: 'Jobs',
            music: 'Don’t Cry'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            job: 'Data Analyst',
            interest: 'snooker',
            birthday: '1988-7-25',
            book: 'A Dream in Red Mansions',
            movie: 'A Chinese Ghost Story',
            music: 'actor'
          },
        ],
        height: 10
      }
    },
    mounted() {
      this.$nextTick(() => console.log(this.$el.parentElement.parentElement.clientHeight))
      this.height = this.$el.parentElement.parentElement.clientHeight - 107
    },
  }
</script>
<style scoped>
  .card {
    height: 100%;
  }

  .search-button {
    position: fixed;
    right: 30px
  }
</style>
