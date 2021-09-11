#lang racket
(define (every-nth n lst)
  (for/list ([i lst]
             [counter (range 0 (add1 (length lst)))]
             #:when (zero? (remainder counter n)))
    i))

(define p1 (build-path (current-directory) "input.txt"))

(define position (cons 0 0))

(define inputList (string->list (read-line (open-input-file p1) 'return-linefeed) ))
(define santaList (every-nth 2 inputList ))
(define robo-santaList (every-nth 2 (rest inputList) ))


; use cond
(define (build-hash lst pos-table)
  (let ([position (cons 0 0)])
    (for ([c lst])
      (set! position (cond
                       [(string=? (string c) "^") (cons (car position)(add1 (cdr position)))]
                       [(string=? (string c) "v") (cons (car position)(sub1 (cdr position)))]
                       [(string=? (string c) ">") (cons (add1 (car position)) (cdr position))]
                       [(string=? (string c) "<") (cons (sub1 (car position)) (cdr position))]
                       ))
      (if (hash-has-key? pos-table position)  (hash-update! pos-table position add1) (hash-set! pos-table position 1)))
    )
  )

(define table (make-hash))
(hash-set! table (cons 0 0) 1 )
(build-hash santaList table)
(build-hash robo-santaList table)

(display (hash-count table))
