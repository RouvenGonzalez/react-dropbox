function DropboxIntegration(){
    return (
        <div>
            <script type="text/javascript" 
                src="https://www.dropbox.com/static/api/2/dropins.js" 
                id="dropboxjs" 
                data-app-key="5fxlndsejs0wj96">
            </script>

            <h1>Example Integration of Dropbox with React</h1>
            <div id="dropboxContainer"></div>
            <ul id="files"></ul>
        </div>
    );
}
export default DropboxIntegration;