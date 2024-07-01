import ActionButton from '@/components/Layout/Dashboard/ActionButton'
import ActionLink from '@/components/Layout/Dashboard/ActionLink'
import { ENUM_ACTION_TITLE } from '@/utils/enum/enum'
import { USER_LINKS } from '@/utils/enum/link'
import useDelete from '@/utils/hooks/useDelete'
import React from 'react'

const UActionBtn = ({ _id }) => {

    // *delete request hook
    const { sendDeleteRequest } = useDelete();

    // *funtion to delete a user
    const handleDeleteUser = (userId) => {
        sendDeleteRequest(userId)
    }

    return (
        <div className='flex gap-[7px]'>
            <ActionLink
                href={`/dashboard/view-user/${_id}`}
                type={ENUM_ACTION_TITLE.VIEW}
            />

            <ActionLink
                href={`${USER_LINKS.UPDATE_USER}${_id}`}
                type={ENUM_ACTION_TITLE.UPDATE}
            />

            <ActionButton
                itype={ENUM_ACTION_TITLE.DELETE}
                onClick={() => handleDeleteUser(_id)}
            />
        </div>
    )
}

export default UActionBtn