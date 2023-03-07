function deleteItem(key, id, tablename, isForceDelete) {

    if (confirm("Are you sure you want to delete this item?")) {
        
        $.ajax({
            url: "ajax/ajax_delete.php",
            cache: false,
            type: "POST",
            data: {
                key: key,
                id: id,
                tablename: tablename,
                isForceDelete: isForceDelete

            },
            success: function(data) {
                window.location.href = window.location.protocol + '//' + window.location.host + window.location.pathname;
            },
            error: function(xhr, ajaxOptions, thrownError) {
                alert(key + "," + id + "," + tablename);
                alert(xhr.status);
                alert(thrownError);
            }
        });

    } else {
      // Do nothing!
      console.log('Thing was not saved to the database.');
    };


}


function updateStatus(key, id, tablename, status) {

   $.ajax({
        url: "ajax/ajax_update_status.php",
        cache: false,
        type: "POST",
        data: {
            status: status,
            key: key,
            id: id,
            tablename: tablename,
          

        },
        success: function(data) {
            window.location.href = window.location.protocol + '//' + window.location.host + window.location.pathname;
        },
        error: function(xhr, ajaxOptions, thrownError) {
            alert(key + "," + id + "," + tablename);
            alert(xhr.status);
            alert(thrownError);
        }
    });

}