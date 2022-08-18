/*	const topBt = document.getElementById('js-scroll-top');
	PageTopBtn.addEventListener('click', () =>{
	  window.scrollTo({
	    top: 0,
	    behavior: 'smooth'
	  });
	});
*/

window.onload=function(){
    let Animation = function() {
    //アイコン位置取得
    let pageTop =  document.getElementById('pageTop');

    //要素の位置座標を取得
    let rect = pageTop.getBoundingClientRect();
    //topからの距離
    let scrollTop = rect.top + window.pageYOffset;

    if(scrollTop > 420){
      pageTop.classList.add('show');
     }  else {
      pageTop.classList.remove('show');
     }
   }

      document.addEventListener('scroll', Animation);
  }


/*

			//■page topボタン

			$(function(){
			let topBtn=$('#pageTop');
			topBtn.hide();

			//◇ボタンの表示設定
			$(window).scroll(function(){
 			 if($(this).scrollTop() > 80){

 		   //---- 画面を80pxスクロールしたら、ボタンを表示する
    		topBtn.fadeIn();

  			}else{

   			 //---- 画面が80pxより上なら、ボタンを表示しない
    		topBtn.fadeOut();

 			 }
			});

 

			// ◇ボタンをクリックしたら、スクロールして上に戻る
			topBtn.click(function(){
			$('body,html').animate({
			scrollTop: 0},500);
			return false;

			});

			});
			
			*/
		