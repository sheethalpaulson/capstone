function CreateAccount()  
{
    var cstyle={
        width:"900px",
        height:"400px",
        backgroundColor:"blue",
        color:"white",
        boxShadow:"0 0 10px blue",
        padding:"10px",
        margin:"10px auto"
    };
        return(
<div style={cstyle}>
<h2>Books World</h2>
<h2>Create Account</h2>
<div>
<form>
    Your Name<input type="text" />
    <br/>
    <br/>
    <br/>
    
    Your Mail<input type="text"/>
    <br/>
    <br/>
    <br/>
    
    Your Password<input type="password"/>
    <br/>
    <br/>
    <br/>Re-enter Password<input type="password"/>
    <br/>
    <br/>
    <br/>

    <button>Create Account</button>
    <p>
    By creating an account, you agree to the Goodreads Terms of Service and Privacy Policy
    </p>
    <p>Already have an account?</p>
    <button>Sign In</button>

</form>
</div>
</div>
        );

    }
export default CreateAccount;