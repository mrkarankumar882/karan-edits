function sendMsg(){const i=document.getElementById('chatInput'),v=i.value.trim();if(!v)return;const d=document.createElement('div');d.className='msg mine';d.textContent=v;document.getElementById('messages').appendChild(d);i.value='';document.getElementById('messages').scrollTop=99999}
document.getElementById('chatInput').addEventListener('keydown',e=>{if(e.key==='Enter')sendMsg()});
function openModal(){document.getElementById('modal').classList.add('show')}function closeModal(){document.getElementById('modal').classList.remove('show')}
