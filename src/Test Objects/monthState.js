const monthState = {
  months: [
    {
      id: 0,
      title: "January",
      selected: false,
      key: "month"
    },
    {
      id: 1,
      title: "February",
      selected: false,
      key: "month"
    },
    {
      id: 2,
      title: "March",
      selected: false,
      key: "month"
    },
    {
      id: 3,
      title: "April",
      selected: false,
      key: "month"
    },
    {
      id: 4,
      title: "May",
      selected: false,
      key: "month"
    },
    {
      id: 5,
      title: "June",
      selected: false,
      key: "month"
    },
    {
      id: 6,
      title: "July",
      selected: false,
      key: "month"
    },
    {
      id: 7,
      title: "August",
      selected: false,
      key: "month"
    },
    {
      id: 8,
      title: "September",
      selected: false,
      key: "month"
    },
    {
      id: 9,
      title: "October",
      selected: false,
      key: "month"
    },
    {
      id: 10,
      title: "November",
      selected: false,
      key: "month"
    },
    {
      id: 11,
      title: "December",
      selected: false,
      key: "month"
    }
  ],
  getMonth: function() {
    const currentMonth = new Date().getMonth();
    return this.months[currentMonth].title;
  }
};

export default monthState;
