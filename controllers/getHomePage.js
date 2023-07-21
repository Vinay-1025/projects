
// const {Sequelize,sequelize,studentUser,adminUser,Leave,Outing,Month}=require('../connection/connection')


const {Sequelize,sequelize}=require('../connection/connection')

const Outing=require('../connection/outingModel')
const Month=require('../connection/monthCheckModel')



let previousMonth

const getHomePage=async (req,res)=>{
    

    async function updateValue() {
        // Perform your desired value update here
        const result=await Outing.update({outings:0},{where:{       
            outings:{
                [Sequelize.Op.gt]:0
            }
    
        }})
      }
      
      // Function to check if the month has changed
      async function checkMonthChange() {
        var currentDate = new Date();
        var currentMonth = currentDate.getMonth();
        
        
    
        // Check if the month has changed
        if (currentMonth !=previousMonth) {
           // Update the previous month
          const result=Month.update({month:currentMonth},{where:{
            month:previousMonth
          }})
          previousMonth=currentMonth
          updateValue(); // Call your update function
        }
      }
      const date=await Month.findAll()
      previousMonth=date[0].month
      
      // Check for month change every second (adjust the interval as needed)
        setInterval(checkMonthChange,1000)
      
        res.render('home')
    }



    module.exports=getHomePage
