// پیدا کردن همه input های رادیو با name="tabs"
const tabs = document.querySelectorAll('input[name="tabs"]');

tabs.forEach(tab => {
  tab.addEventListener('change', () => {
    // حذف رنگ متن از همه label ها
    tabs.forEach(t => {
      const lbl = document.querySelector(`label[for="${t.id}"]`);
      if (lbl) {
        lbl.style.color = ''; // حذف رنگ قبلی
      }
    });

    // اضافه کردن رنگ متن به label فعال
    const activeLbl = document.querySelector(`label[for="${tab.id}"]`);
    if (activeLbl) {
      activeLbl.style.color = '#7065F0'; // رنگ متن تب فعال
    }
  });
});

// اعمال رنگ تب فعال اولیه هنگام بارگذاری صفحه
window.addEventListener('DOMContentLoaded', () => {
  const checkedTab = document.querySelector('input[name="tabs"]:checked');
  if (checkedTab) {
    checkedTab.dispatchEvent(new Event('change'));
  }
});
