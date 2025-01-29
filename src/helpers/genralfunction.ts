
 const getStatus = (status: any) => {

    if (status._id === process.env.NEXT_PUBLIC_PENDING_STATUS_ID) {
        return 'pending'
    }
    else if (status._id === process.env.NEXT_PUBLIC_ACCEPT_STATUS_ID) {
        return 'accepted'
    }else if (status._id === process.env.NEXT_PUBLIC_PROCESSING_STATUS_ID){
        return 'processing'
    }
    else if (status._id === process.env.NEXT_PUBLIC_CANCEL_STATUS_ID) {
        return 'cancel'
    }
    else if (status._id === process.env.NEXT_PUBLIC_COMPLITE_STATUS_ID) {
        return 'completed'
    }
    else if (status._id === process.env.NEXT_PUBLIC_REJECT_STATUS_ID) {
        return 'rejected'
    }
    else if (status._id === process.env.NEXT_PUBLIC_REJECT_STATUS_ID) {
        return 'rejected'
    }
    else {
        return 'N/A'
    }
}

export {getStatus}