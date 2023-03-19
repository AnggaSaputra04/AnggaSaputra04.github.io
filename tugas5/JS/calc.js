function hitung(pilihan)
{
    var bil1=document.getElementById('angka1').value;
    var bil2=document.getElementById('angka2').value;
    bil1 = parseFloat(bil1)
    bil2 = parseFloat(bil2)
    if (pilihan=='+'){
        document.getElementById('hasil').value = bil1 + bil2;
    }
    else if(pilihan == '-'){
        document.getElementById('hasil').value = bil1 - bil2;
    }
    else if(pilihan == '*'){
        document.getElementById('hasil').value = bil1 * bil2;
    }
    else if(pilihan == '/'){
        document.getElementById('hasil').value = bil1 / bil2;
    }
    else if(pilihan == '**') {
            document.getElementById('hasil').value = bil1 ** bil2;
        }
     else if(pilihan == '+','-','*','/','**'){
        alert(" Anda Gagal Login");
        
     }   
    
    document.getElementById('hasil').style.backgroundColor="#";
}