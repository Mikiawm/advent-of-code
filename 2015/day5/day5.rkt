#lang racket
(require racket/list)

(define input-list (call-with-input-file "input.txt" (lambda (in) (sequence->list (in-lines in 'return-linefeed)))))

(define vowels (string->list "aeiou"))

(define (vowel? c)
  (member c vowels))

(define (count-vowels s)
  (length (filter vowel? (string->list s))))


(define (is-nice word)
  (cond
    [(or (string-contains? word "ab") (string-contains? word "cd") (string-contains? word "pq") (string-contains? word "xy")) false]
    [(< (count-vowels word) 3) false]
    [(ormap eq? (rest (string->list word)) (drop-right (string->list word) 1) ) true]
    [else false]
    )
  )

(define (is-nice2 word)
  (cond
    [(and (search-equal (substring word 1 (string-length word)) (substring word 0 1))
          (search-pair (substring word 2 (string-length word)) (substring word 0 2)) ) true]
    [else false]
    )
  )

(define (search-pair word str-pair)
  (cond
    [(< (string-length word ) 2 ) false]
    [(string-contains? word str-pair) true]
    [else (search-pair (substring word 1 (string-length word)) (string-append (substring str-pair 1 2) (substring word 0 1)))]
    )
  )

(define (search-equal word str)
  (cond
    [(< (string-length word ) 2 ) false]
    [(string-contains? (substring word 1 2) str) ]
    [else (search-equal (substring word 1 (string-length word)) (substring word 0 1))]
    ))



(define (get-nice-words lst is-nice-proc)
  (let ([cnt 0])
    (for ([c lst])
      (cond
        [(is-nice-proc c) (set! cnt (add1 cnt))]
        )
      )
    cnt
    )
  )

(display (string-append "First part: " (number->string(get-nice-words input-list is-nice))))
(newline)
(display (string-append "Second part: " (number->string(get-nice-words input-list is-nice2))))

