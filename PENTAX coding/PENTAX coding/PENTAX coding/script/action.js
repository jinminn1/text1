

$(document).ready(function(){


   $('.visualcamera_line').fadeOut(3000); 

  $('.camera_box').delay(2000).fadeIn(3000).animate({opacity:1},2000)
  $('.text_pentax').delay(2000).animate({left:0},2000)
  $('.text_k3').delay(2000).animate({right:10},2000)
  $('.camera_pic_bk').delay(3000).animate({left:460},1500)
  $('.shuter').delay(4000).animate({bottom:-35})
  $('.frame').delay(4000).animate({opacity:1},2000)

 /*  $('.camera_pic').delay(4000).fadeIn().animate({opacity:1},2000) */



  $('.camera_photo').each(function(){
    let cameraPLi = $(this).length;

    let cameraLength = -1

    $('#visual .shuter').click(function(){
    
      cameraLength++
    
     
      if(cameraLength > cameraPLi ){
        cameraLength = 0
      };
    
      $('#visual .camera_photo_box li').eq(cameraLength).fadeIn(1000).siblings().fadeOut();
    
    })
  })
  

  $('.shuter').click(function(){

    $('.shuter iframe').attr('src','https://www.youtube.com/embed/ZY4nGIvK8w0?autoplay=1')
  })
  

  /* 비주얼 숫자 올라가기 */

 /*  $('#visual .frame span').each(function(){
    let frameS = 0

      setInterval(function(){$('#visual .frame span').each(function(){
        frameS++

        let frameNum =  $(this).attr('date-num')

        if(frameS <= frameNum){
          $(this).text(frameS)
        }


      },)
    },)


  }) */

  function numberIncrease(){
    /* 숫자 올라가는거 2번째 방법 */
    $('#visual .frame span').each(function(){
      let textNumber = $(this).attr('date-num')
      let $spanNum = $(this);
    
    $({val : 0}).delay(3000).animate({val : textNumber},{
      duration : 4000 ,
      step : function(){
        $spanNum.text( numberWithCommas(Math.ceil(this.val)))
      },
    
      complet : function(){
        $spanNum.text( numberWithCommas(Math.ceil(this.val)))
      }
    
    })
  })
  function numberWithCommas(val) {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 }
}

numberIncrease()



/* 섹션2 */

  let sec2Lieq = 0
  let proLi = 0
  let protextH = $('.pro_text').height() 
  
$('.btn_box .next').click(function(){
  proLi++
  sec2Lieq++

if(sec2Lieq >= proLi ){
  sec2Lieq=proLi-1
}
if(proLi >= $('.products_text div').length - 1){
  proLi = $('.products_text div').length - 1
}

  $('.products_img li').eq(sec2Lieq).fadeIn(800).siblings().fadeOut()
  $('.products_text').css({marginTop:(-protextH-50)*proLi+'px'})
})




$('.btn_box .prev').click(function(){
  proLi--
  sec2Lieq--
if(sec2Lieq < 0 ){
  sec2Lieq=0
}

if(proLi <= 0){
  proLi = 0
}

  $('.products_img li').eq(sec2Lieq).fadeIn(800).siblings().fadeOut()
  $('.products_text').css({marginTop:(-protextH-50)*proLi+'px'})
})
})








/* 섹션3 */


