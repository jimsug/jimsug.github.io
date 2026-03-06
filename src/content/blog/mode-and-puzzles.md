---
title: "When the channel *is* the message"
description: "Puzzles and the limits of mode"
pubDate: "Mar 6 2026"
---

I studied systemic functional linguistics (SFL) at the University of Sydney a while back. More recently, I've written a handful of puzzles for the MIT Mystery Hunt in 2022. It took me an embarrassingly long time to realise that these two things had anything to say to each other, but I think they do, and I want to start with one specific point about **mode**.

## A very brief sketch of the relevant theory

SFL is a theory of language developed by M.A.K. Halliday. Its central insight is that language is doing three kinds of work simultaneously in every utterance. These are called the **metafunctions**:

- **Ideational**: language construes our experience of the world. Who did what to whom, where, when, why. This is the content, the "aboutness" of a text.
- **Interpersonal**: language enacts social relationships. Commands, offers, questions, statements. Politeness, authority, intimacy, distance.
- **Textual**: language organises itself into coherent messages. What comes first, what gets emphasised, how one sentence connects to the next. This is the meaning that makes a stretch of language hang together as a text rather than a jumble of unrelated clauses.

These three kinds of meaning aren't separate layers you can peel apart. They're simultaneous: every clause is doing all three at once.

SFL connects these metafunctions to context through three **register variables**:

- **Field** (what's being talked about) resonates with ideational meaning.
- **Tenor** (the social relationships between participants) resonates with interpersonal meaning.
- **Mode** (the role language is playing in the situation) resonates with textual meaning.

This mapping, known as **context-metafunction resonance**, is one of the pillars of the theory. It says that the contextual variable of field is realised through the ideational systems of language, tenor through the interpersonal systems, and mode through the textual systems. Each register variable has a job, and it stays in its lane.

The argument I want to make in this post is that puzzle texts present cases where **mode doesn't stay in its lane**.

## Two recent rethinkings of mode

In SFL, mode has traditionally described the role language plays in the interaction: is it spoken or written? Is it accompanying action or constituting the entire activity? Is it monologic or dialogic? These choices constrain what the lexicogrammar can do.

Recently, Doran, Martin, and Herrington (2024) have proposed a significant rethinking of mode, reconceiving it as **a resource for composing texture** (that is, the property that makes a stretch of language hang together as a coherent, unified text rather than a jumble of unrelated sentences). Under their model, mode offers three systems: JUNCTURE (chunking information by demarcating boundaries or sustaining flow), PULSING (foregrounding and backgrounding information), and DISTRIBUTION (distributing information across a text or out to the immediate situation). This is a much sharper model than previous classificatory approaches, and crucially, it maintains context-metafunction resonance: mode stays in the textual lane. The things that used to leak across metafunctions (technicality, context-dependency, social contact) have been redistributed to cross-metafunctional instantiation principles (mass, presence, and association), which is architecturally much cleaner.

Separately, Bateman (2025) has critiqued SFL's treatment of mode from a multimodal perspective, arguing that mode has been trying to do too many things at once because SFL has focused too narrowly on language. His solution is to "unpack" mode by sharply separating **materiality** (the physical substrate that supports semiotic activity), **medium** (the institutional practices around that materiality), and **semiotic modes** (the actual meaning-making systems deployed). His key metaphor, borrowing from Hasan, is that field, tenor, and mode are like chemicals in solution, each affecting the others. But channel distinctions (phonic/graphic) aren't one of the chemicals: they're more like the test tube. Materiality is the pre-condition for semiosis, not a classification of semiotic behaviour within it.

I think both of these models work well for the texts they were designed to analyse. But there's a class of texts neither has been tested against, and those texts break both in interesting ways.

Puzzle hunts break them.

## A pub full of upside-down Australians

> Unmarked spoilers for [Cheers](https://puzzles.mit.edu/2022/puzzle/cheers/) follow. [Skip past spoilers](#when-the-channel-means-something)

I co-wrote a puzzle called [Cheers](https://puzzles.mit.edu/2022/puzzle/cheers/) for the 2022 MIT Mystery Hunt. It's a logic puzzle about Australian beer sizes and Big Things (those oversized roadside sculptures you find all over the country). It's also, when you open it, **entirely upside down**. The flavour text, the table of clues, all of it: rotated 180 degrees on the page.

This isn't a gimmick. It's a reference. The puzzle is deeply, obnoxiously Australian, and Australia is, as the rest of the English-speaking world never tires of reminding us, "down under." The inversion is a joke, a thematic statement, and a puzzle mechanism all at once. Before you can engage with a single word of the logic puzzle, you need to recognise that the text is upside down and do something about it. Rotate your screen, copy the underlying HTML, read upside down if you're talented. The point is: the channel of communication is not transparent. It has to be _decoded_.

In Hallidayan terms, this means the expression plane is doing ideational work. The _way_ the text is presented (inverted) is _about_ something (Australia, "down under," the cultural context of the puzzle's content). The mode isn't just carrying the message; it _is_ part of the message. Hjelmslev's principle that expression is arbitrary with respect to content doesn't hold here: the graphic presentation is motivated by the field.

In terms of Doran, Martin, and Herrington's (2024) model, this is not JUNCTURE (the inversion doesn't chunk information), not PULSING (it doesn't foreground or background), and not DISTRIBUTION (it doesn't distribute information across the text or point to the situation). It falls outside all three of their mode systems, because it's not composing texture at all. It's doing ideational work: construing a relationship between the text and the cultural phenomenon of Australian identity. The context-metafunction resonance that their paper is specifically designed to protect (mode → textual) is violated. Mode is resonating with field.

You could argue that the Cheers inversion is an extreme form of PULSING. But if so, it's PULSING that has crossed metafunctional lines: the salience serves ideational meaning, not textual meaning. This is precisely the kind of permeability that Doran, Martin, and Herrington's architecture is designed to minimise. Either the inversion falls outside PULSING (in which case mode needs additional systems), or it falls inside PULSING but violates context-metafunction resonance (in which case the resonance principle needs qualification). Either way, the data is doing something the model doesn't currently predict.

In Bateman's (2025) terms, the inversion is a property of the materiality: the 2D static graphic traces on the page have been physically rotated. In his architecture, materiality is the test tube, the pre-condition for semiosis. It provides the "canvas" that semiotic modes dock onto. It constrains which semiotic modes can operate, but it doesn't itself carry meaning. The Cheers inversion is a case where the test tube is part of the experiment. The materiality isn't just enabling semiosis; it's construing experiential meaning about Australia. That's not something Bateman's architecture predicts either.

## Trees that talk in phonemes

> Unmarked spoilers for [The Talking Tree](https://puzzles.mit.edu/2022/puzzle/the-talking-tree/) follow. [Skip past spoilers](#when-the-channel-means-something)

I also wrote a puzzle called [The Talking Tree](https://puzzles.mit.edu/2022/puzzle/the-talking-tree/) for the same hunt. This one presents solvers with constituency parse trees (the branching diagrams from Chomskyan syntax) alongside a set of garden-path sentences. The solver has to match trees to sentences, identify a keyword in each tree, and then recognise that the blank spaces in the tree encode **phonemes**, not letters. The slash notation /\_\_\_\_\_/ is the clue: it's the standard convention for phonemic transcription.

What happens at the extraction step is something neither Halliday's classic mode parameters nor Doran, Martin, and Herrington's (2024) mode-as-resource model is set up to describe. The solver has to move from the **graphic plane** (the written word "ghost") to the **phonic plane** (the phoneme sequence /goʊst/). They have to stop reading the word as a transparent sign and start treating it as an opaque container for speech sounds. Normal reading works in the opposite direction: you look _through_ the graphic substance to the meaning. This puzzle asks you to look _at_ the graphic substance and mine it for phonic data.

This is different from the Cheers case. There, mode was doing ideational work (the expression plane was _about_ something). Here, mode has **become field**: the channel of communication has become the experiential domain being construed. The solver isn't just using language; they're construing language's own expression plane as a set of phenomena to be analysed, decomposed, and mined. In Doran, Martin, and Herrington's terms, this would be like mode becoming a resource for construing phenomena rather than composing texture, which collapses the distinction between two register variables entirely.

In Halliday's architecture, the graphic and phonic planes are alternative realisations of the same content. They're normally interchangeable: you can speak or write the same clause, and the meaning stays (roughly) the same. "The Talking Tree" makes them non-interchangeable: the puzzle _only works_ if you move from graphic to phonic, because phoneme counts differ from letter counts. "Finish" has six letters but five phonemes (/fɪnɪʃ/). The puzzle depends on this asymmetry between expression planes.

## When the channel means something

It's tempting to propose a general "mode opacity" cline, ranging from fully transparent channels to fully obstructed ones. And puzzle hunts certainly span that range: some puzzles hide data in HTML source code, some require physical folding, some present information in the wrong file format entirely. But I don't think general obstruction is the theoretically interesting case. A puzzle hidden in source code is mode being difficult, not mode being meaningful. You could probably stretch Doran, Martin, and Herrington's (2024) DISTRIBUTION system to cover it: controlling access to information is textual work, even when it's taken to an extreme.

The interesting case is when the obstruction itself carries experiential meaning. When the _way_ the channel is disrupted is _about_ the same thing the content is about.

The Cheers inversion isn't arbitrary. It's about Australia. A puzzle about fragmentation that arrives as torn-up pieces isn't just hard to read; the torn-ness construes the thematic content of the puzzle. A puzzle about mirrors presented as a mirror image, a puzzle about cryptography that is itself encrypted, a blank page that is a puzzle about absence: in each case, the manner of presentation resonates with the field, and it does so _through mode_, not through the lexicogrammar.

I want to call this **ideationally motivated mode**: cases where mode does not merely compose texture (Doran, Martin, and Herrington's JUNCTURE, PULSING, DISTRIBUTION), but actively construes experience. The channel isn't obstructing for obstruction's sake. It's obstructing in order to convey meaning.

This is the case that challenges SFL's context-metafunction resonance, because mode is doing field's job. And puzzle hunts surface it with unusual clarity, because puzzle constructors are systematically rewarded for thematic coherence between mechanism and presentation. A puzzle whose format _means_ something is more highly valued in the community than one whose format is arbitrary. The tradition has evolved toward ideationally motivated mode without having the theoretical vocabulary to describe it.

And it isn't just my puzzles. "[The Inspectre](https://puzzles.mit.edu/2025/puzzle/the-inspectre/)" (Andrew Russell, 2025 MIT Mystery Hunt) is a puzzle about the spectre, the aperiodic monotile discovered by mathematicians in 2023. During the hunt, teams received a bag of laser-cut transparent acrylic jigsaw pieces and a printed mat. The pieces are shaped as spectres. You solve a puzzle about aperiodic tiling by physically assembling aperiodic tiles. This takes us beyond language into physical materiality, but that's precisely where both Doran et al. (2024) and Bateman (2025) say the theory needs to go: toward a fully multimodal account of meaning-making. And the phenomenon is the same. The materiality of the puzzle doesn't just reference the field; it _is_ the field. In Bateman's (2025) terms, this is the test tube not merely carrying a message etched on the glass, but being made of the very substance the experiment is studying. Different author, different year, different team, different materiality (physical objects rather than a web page), same phenomenon: the channel construes experience.

There's a distinct but related phenomenon in "The Talking Tree," where the channel of communication doesn't just carry ideational meaning but **becomes the experiential domain itself**. The solver isn't just working through language; they're construing language's own expression plane (its phonemic structure) as a set of phenomena to analyse and decompose. Mode hasn't just leaked into field; mode _is_ field. This might be an extreme case of the same principle, or it might be a different phenomenon entirely. I'm not sure yet.

What I am sure of is that the standard SFL architecture, where mode resonates with textual meaning and field resonates with ideational meaning, doesn't hold for these texts. And these texts aren't exotic one-offs. Puzzle hunts produce hundreds of them every year. They're a systematic, genre-level convention in which the expression plane is routinely deployed for ideational purposes.

## Beyond puzzles

This might sound like a niche concern. Who cares if puzzle texts violate context-metafunction resonance? But the same phenomenon shows up in other text types, once you know what to look for:

- **Concrete poetry**, where the visual arrangement of words on the page is part of the poem's meaning. The graphic substance is doing ideational work.
- **Graphic novels and comics**, though care is needed here. A splash page marking a moment of revelation is arguably just skilled PULSING: foregrounding information through visual salience. But panels shaped like prison bars during an imprisonment scene, a page that must be physically rotated to follow a character falling, or a layout that literally dissolves into scattered fragments as a character's mind unravels: these are cases where the graphic arrangement isn't just saying "this moment matters" (textual) but "this is what confinement/falling/dissolution is like" (ideational). The expression plane is construing experience, not just organising attention.
- **Multimodal digital texts**, where a web page's visual design communicates something about the content (a brutalist layout for a minimalism blog, a glitchy aesthetic for a cyberpunk story). Graphic substance doing ideational work.

In each case, someone has made a mode choice that doesn't just enable meaning-making but _participates_ in it. Mode isn't transparent. It isn't just composing texture. It's construing experience, or enacting social relations, or both.

## Why this matters for puzzles

If you're reading this as a puzzle constructor or solver rather than a linguist, you might reasonably ask: so what? We already know that format-content resonance makes a good puzzle. Why do we need a theoretical vocabulary for it?

I think there are a few reasons.

First, **it makes tacit knowledge explicit**. The puzzle hunt community has strong intuitions about what makes a puzzle elegant. A puzzle whose presentation is thematically integrated with its content is valued more highly than one where the format is arbitrary. Constructors know this; solvers feel it. But we don't have precise language for it, which makes it hard to teach, hard to discuss in post-hunt wrap-ups, and hard to articulate in feedback beyond "the format was clever" or "I liked how the presentation tied in." The term "ideationally motivated mode" is admittedly a mouthful, but it gives us a concept to point at: the channel of communication is construing experiential meaning, and that's a specific, identifiable design choice that can be made well or badly.

Second, **it gives us a framework for comparing puzzles**. Not all mode choices are doing the same thing. A puzzle hidden in source code (mode as obstruction) is doing different semiotic work from a puzzle presented upside down because it's about Australia (mode as ideational construal), which is different again from a puzzle where you need to count phonemes rather than letters (mode as field). These aren't just three "creative presentations." They're three structurally distinct relationships between channel and content. Being able to name the distinction helps us understand why some format choices feel more satisfying than others: the ones that resonate ideationally tend to be doing more meaning-making work.

Third, and perhaps most practically, **it suggests a design heuristic**. If you're constructing a puzzle, you can ask: is my presentation just a container for the content, or is it _about_ the content? If it's just a container, that's fine. Most puzzles work that way, and many of them are excellent. But if you can find a way to make the format construe the field, to make the channel mean something, you're adding a layer of semiotic density that solvers will feel even if they can't articulate why. The best puzzles in the tradition already do this. Having a name for it might help more constructors do it deliberately.

## Where this might go

This is a sketch, not a theory. A proper treatment would need to work through several things. First, more examples from puzzle hunts (and beyond) where mode is ideationally motivated, to establish that this is a systematic phenomenon rather than an occasional curiosity. Second, the relationship between ideationally motivated mode and Doran, Martin, and Herrington's (2024) mode-as-resource systems. Can JUNCTURE, PULSING, or DISTRIBUTION be extended to accommodate it, or does it require a new system? Third, the question of whether what I'm describing is genuinely new or whether existing SFL work on the permeability of register variables already accounts for it. There's a long tradition of acknowledging that field, tenor, and mode aren't hermetically sealed from each other. Puzzle texts might represent an extreme of that permeability, or they might represent something qualitatively different. I'd need to engage more carefully with the literature on this before making a strong claim either way. Finally, the relationship between the Cheers case (mode carrying ideational meaning) and The Talking Tree case (mode becoming field). Are these points on a single continuum, or two distinct phenomena?

There's also the question of where ideationally motivated mode sits in relation to Bateman's (2025) separation of materiality from medium from semiotic mode. His architecture treats materiality as the pre-condition for semiosis: the "test tube" in which the chemicals of field, tenor, and mode combine. Puzzle texts suggest that the test tube can itself be part of the experiment. Materiality isn't always a neutral canvas; it can be semiotically loaded with ideational content. Whether this requires a revision of his model or simply an acknowledgement that materiality can, under certain conditions, participate in meaning-making beyond providing affordances, is an open question. But the data is clear: in puzzle hunts, constructors routinely manipulate materiality (rotating pages, hiding data in file formats, requiring physical transformation of objects) for ideational purposes. If materiality is the test tube, puzzle constructors have been etching messages on the glass.

What I do think is that puzzle hunts provide novel data for an active conversation. Doran, Martin, and Herrington (2024) have just rethought mode. Bateman (2025) has just critiqued it from a multimodal perspective. I'm suggesting that the concept of **ideationally motivated mode**, visible most clearly in puzzle texts but present elsewhere, is something neither model yet accounts for. Puzzle constructors have been exploiting this for decades. Linguists just haven't been looking.

**References**

Bateman, John A. 2025. Multimodality writes back: Refining the contextual variable of "mode" in systemic functional linguistics. _Language, Context and Text_ 7(1). 1-41.

Doran, Y. J., J. R. Martin, and Michele Herrington. 2024. Rethinking context: Realisation, instantiation, and individuation in systemic functional linguistics. _Journal of World Languages_ 10(1). 177-220.

_I studied SFL with J.R. Martin at the University of Sydney. I wrote puzzles for team Palindrome in the 2022 MIT Mystery Hunt. I'm interested in whether these two things can talk to each other, and I think they can. This is the first in what might become a series._
