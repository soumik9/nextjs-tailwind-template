import Swal from 'sweetalert2';

const useDelete = () => {

    const sendDeleteRequest = async (id, deleteMutation, loading) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            timer: loading,
            timerProgressBar: true,
            // didOpen: () => {
            //   Swal.showLoading();
            //   const timer = Swal.getPopup().querySelector("b");
            //   timerInterval = setInterval(() => {
            //     timer.textContent = `${Swal.getTimerLeft()}`;
            //   }, 100);
            // },
            willClose: () => {
                loading === false;
            }
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deleteMutation(id)
            }
        })
    }

    return { sendDeleteRequest };
}

export default useDelete;