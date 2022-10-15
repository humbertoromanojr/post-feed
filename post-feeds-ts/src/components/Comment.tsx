import { useState } from 'react';
import { ThumbsUp, Trash } from 'phosphor-react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';

import styles from './Comment.module.css';

interface CommentProps {
    publishedAt: Date;
    content: string;
    onDeleteComment: (commentToDelete: string) => void;
}

export function Comment({ publishedAt, content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1;
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} 
                src="https://github.com/humbertoromanojr.png"
                alt="avatar" 
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>JR Dev PM</strong>
                            <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                                {publishedDateRelativeToNow}
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar cometário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20} /> 
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}