$(document).ready(function () {
  //菜单栏选择
  $(document).on("click",".menu_list span",function(){
    $(this).addClass('menu_list_on').siblings().removeClass('menu_list_on');
  })

  //头部隐藏
  var winHeight = $(document).scrollTop();
  $(window).scroll(function() {
    var scrollY = $(document).scrollTop();// 获取垂直滚动的距离，即滚动了多少

    if (scrollY > 71){ //如果滚动距离大于550px则隐藏，否则删除隐藏类
      $('.header').addClass('hiddened');
    }

    else {
      $('.header').removeClass('hiddened');
    }

    if (scrollY > winHeight){ //如果没滚动到顶部，删除显示类，否则添加显示类
      $('.header').removeClass('showed');
    }

    else {
      $('.header').addClass('showed');
    }

  });


})