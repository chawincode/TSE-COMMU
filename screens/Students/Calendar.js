import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Schedule = () => {
  const [items, setItems] = useState({});

  const DateLists = [
    { id: 1, day: "2022-11-04", event: "วันเปิดภาคการศึกษา" },
    { id: 2, day: "2022-11-05", event: "ขอถอนรายวิชาโดยบันทึกอักษร W" },
    { id: 3, day: "1 - 30 September 2022:", event: "ขอถอนรายวิชาโดยบันทึกอักษร W" },
    { id: 4, day: "19 September 2022:", event: "วันเริ่มนักศึกษาดูผังสอบกลางภาค"},
    { id: 5, day: "25 - 30 September 2022:", event: "สัปดาห์ของการสอบกลางภาค" },
    { id: 6, day: "1 - 2 October 2022:", event: "สัปดาห์ของการสอบกลางภาค" },
    { id: 7, day: "1 - 16 October 2022:", event: "ขอถอนรายวิชาโดยบันทึกอักษร W"},
    { id: 8, day: "21 November 2022:", event: "วันเริ่มนักศึกษาดูผังสอบปลายภาค"},
    { id: 9, day: "26 November 2022:", event: "วันสุดท้ายของภาคการศึกษา" },
    { id: 10, day: "27 November 2022:", event: "วันปิดภาคการศึกษา" },
    { id: 11, day: "28 - 30 November 2022:", event: "ช่วงการสอบปลายภาค" },
    { id: 12, day: "1 - 4 December 2022:", event: "ช่วงการสอบปลายภาค" },
    { id: 13, day: "6 - 9 December 2022:", event: "ช่วงการสอบปลายภาค" },
    { id: 14, day: "13 - 16 December 2022:", event: "ช่วงการสอบปลายภาค" },
  ];

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
          if (!items[strTime]) {
            items[strTime] = [];
            const numItems = Math.floor(1);
            for (let j = 0; j < numItems; j++) {
              DateLists.map((product) => {
              if (strTime == product.day) {
                items[strTime].push({
                  events: product.event
                })
              }} 
              )
            }
          }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17 ,top: 12}}>
        <Card style={{backgroundColor: 'black'}}>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{color: 'red'}}>{item.events}</Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={Date.now()}
        renderItem={renderItem}
        showClosingKnob={true}
        theme={{
          agendaDayTextColor: "darkorange",
          agendaDayNumColor: "#3c3c3c",
          agendaKnobColor: "lightgrey",
          backgroundColor: "#fffbed",
          monthTextColor: "darkorange",
          textSectionTitleColor: "darkorange",
          dayTextColor: "#5d6e1e",
          selectedDayBackgroundColor: "darkorange",
          todayTextColor: "red",
          dotColor: "#FF4500",
          selectedDotColor: "#FF4500",
        }}
      />
    </View>
  );
};


export default Schedule;