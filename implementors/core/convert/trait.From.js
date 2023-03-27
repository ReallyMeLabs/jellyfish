(function() {var implementors = {
"jf_plonk":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"jf_primitives/pcs/errors/enum.PCSError.html\" title=\"enum jf_primitives::pcs::errors::PCSError\">PCSError</a>&gt; for <a class=\"enum\" href=\"jf_plonk/errors/enum.PlonkError.html\" title=\"enum jf_plonk::errors::PlonkError\">PlonkError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.68.1/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"jf_plonk/errors/enum.PlonkError.html\" title=\"enum jf_plonk::errors::PlonkError\">PlonkError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;SerializationError&gt; for <a class=\"enum\" href=\"jf_plonk/errors/enum.PlonkError.html\" title=\"enum jf_plonk::errors::PlonkError\">PlonkError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"jf_primitives/errors/enum.PrimitivesError.html\" title=\"enum jf_primitives::errors::PrimitivesError\">PrimitivesError</a>&gt; for <a class=\"enum\" href=\"jf_plonk/errors/enum.PlonkError.html\" title=\"enum jf_plonk::errors::PlonkError\">PlonkError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"jf_plonk/errors/enum.SnarkError.html\" title=\"enum jf_plonk::errors::SnarkError\">SnarkError</a>&gt; for <a class=\"enum\" href=\"jf_plonk/errors/enum.PlonkError.html\" title=\"enum jf_plonk::errors::PlonkError\">PlonkError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"jf_relation/errors/enum.CircuitError.html\" title=\"enum jf_relation::errors::CircuitError\">CircuitError</a>&gt; for <a class=\"enum\" href=\"jf_plonk/errors/enum.PlonkError.html\" title=\"enum jf_plonk::errors::PlonkError\">PlonkError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"jf_plonk/errors/enum.PlonkError.html\" title=\"enum jf_plonk::errors::PlonkError\">PlonkError</a>&gt; for <a class=\"enum\" href=\"jf_relation/errors/enum.CircuitError.html\" title=\"enum jf_relation::errors::CircuitError\">CircuitError</a>"],["impl&lt;E:&nbsp;Pairing&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.Proof.html\" title=\"struct jf_plonk::proof_system::structs::Proof\">Proof</a>&lt;E&gt;&gt; for TaggedBase64"],["impl&lt;E:&nbsp;Pairing&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.Proof.html\" title=\"struct jf_plonk::proof_system::structs::Proof\">Proof</a>&lt;E&gt;&gt; for TaggedBase64"],["impl&lt;E, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.Proof.html\" title=\"struct jf_plonk::proof_system::structs::Proof\">Proof</a>&lt;E&gt;&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.68.1/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;E::BaseField&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Pairing&lt;G1Affine = Affine&lt;P&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: SWCurveConfig&lt;BaseField = E::BaseField, ScalarField = E::ScalarField&gt;,</span>"],["impl&lt;E:&nbsp;Pairing&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.BatchProof.html\" title=\"struct jf_plonk::proof_system::structs::BatchProof\">BatchProof</a>&lt;E&gt;&gt; for TaggedBase64"],["impl&lt;E:&nbsp;Pairing&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.BatchProof.html\" title=\"struct jf_plonk::proof_system::structs::BatchProof\">BatchProof</a>&lt;E&gt;&gt; for TaggedBase64"],["impl&lt;E:&nbsp;Pairing&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.Proof.html\" title=\"struct jf_plonk::proof_system::structs::Proof\">Proof</a>&lt;E&gt;&gt; for <a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.BatchProof.html\" title=\"struct jf_plonk::proof_system::structs::BatchProof\">BatchProof</a>&lt;E&gt;"],["impl&lt;F:&nbsp;Field&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.ProofEvaluations.html\" title=\"struct jf_plonk::proof_system::structs::ProofEvaluations\">ProofEvaluations</a>&lt;F&gt;&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.68.1/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;F&gt;"],["impl&lt;E, F, P1, P2&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.VerifyingKey.html\" title=\"struct jf_plonk::proof_system::structs::VerifyingKey\">VerifyingKey</a>&lt;E&gt;&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.68.1/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;E::BaseField&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: Pairing&lt;G1Affine = Affine&lt;P1&gt;, G2Affine = Affine&lt;P2&gt;, TargetField = Fp2&lt;F&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Fp2Config&lt;Fp = E::BaseField&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;P1: SWCurveConfig&lt;BaseField = E::BaseField, ScalarField = E::ScalarField&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;P2: SWCurveConfig&lt;BaseField = E::TargetField, ScalarField = E::ScalarField&gt;,</span>"]],
"jf_primitives":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.68.1/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.68.1/std/primitive.array.html\">32</a>]&gt; for <a class=\"struct\" href=\"jf_primitives/aead/struct.EncKey.html\" title=\"struct jf_primitives::aead::EncKey\">EncKey</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"jf_primitives/aead/struct.EncKey.html\" title=\"struct jf_primitives::aead::EncKey\">EncKey</a>&gt; for [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.68.1/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.68.1/std/primitive.array.html\">32</a>]"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.68.1/std/primitive.usize.html\">usize</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.68.1/std/primitive.array.html\">4</a>]&gt; for <a class=\"struct\" href=\"jf_primitives/circuit/rescue/struct.RescueStateVar.html\" title=\"struct jf_primitives::circuit::rescue::RescueStateVar\">RescueStateVar</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"jf_primitives/rescue/errors/enum.RescueError.html\" title=\"enum jf_primitives::rescue::errors::RescueError\">RescueError</a>&gt; for <a class=\"enum\" href=\"jf_primitives/errors/enum.PrimitivesError.html\" title=\"enum jf_primitives::errors::PrimitivesError\">PrimitivesError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;SerializationError&gt; for <a class=\"enum\" href=\"jf_primitives/errors/enum.PrimitivesError.html\" title=\"enum jf_primitives::errors::PrimitivesError\">PrimitivesError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;BLST_ERROR&gt; for <a class=\"enum\" href=\"jf_primitives/errors/enum.PrimitivesError.html\" title=\"enum jf_primitives::errors::PrimitivesError\">PrimitivesError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;SerializationError&gt; for <a class=\"enum\" href=\"jf_primitives/pcs/errors/enum.PCSError.html\" title=\"enum jf_primitives::pcs::errors::PCSError\">PCSError</a>"],["impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.68.1/std/primitive.slice.html\">[F]</a>&gt; for <a class=\"struct\" href=\"jf_primitives/rescue/struct.RescueVector.html\" title=\"struct jf_primitives::rescue::RescueVector\">RescueVector</a>&lt;F&gt;"],["impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.68.1/std/primitive.array.html\">[F; 4]</a>&gt; for <a class=\"struct\" href=\"jf_primitives/rescue/struct.RescueVector.html\" title=\"struct jf_primitives::rescue::RescueVector\">RescueVector</a>&lt;F&gt;"],["impl&lt;F:&nbsp;PrimeField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;[<a class=\"struct\" href=\"jf_primitives/rescue/struct.RescueVector.html\" title=\"struct jf_primitives::rescue::RescueVector\">RescueVector</a>&lt;F&gt;; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.68.1/std/primitive.array.html\">4</a>]&gt; for <a class=\"struct\" href=\"jf_primitives/rescue/struct.RescueMatrix.html\" title=\"struct jf_primitives::rescue::RescueMatrix\">RescueMatrix</a>&lt;F&gt;"],["impl&lt;F:&nbsp;<a class=\"trait\" href=\"jf_primitives/rescue/trait.RescueParameter.html\" title=\"trait jf_primitives::rescue::RescueParameter\">RescueParameter</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"jf_primitives/rescue/struct.PRP.html\" title=\"struct jf_primitives::rescue::PRP\">PRP</a>&lt;F&gt;&gt; for <a class=\"struct\" href=\"jf_primitives/rescue/struct.Permutation.html\" title=\"struct jf_primitives::rescue::Permutation\">Permutation</a>&lt;F&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"jf_primitives/signatures/bls/struct.BLSSignKey.html\" title=\"struct jf_primitives::signatures::bls::BLSSignKey\">BLSSignKey</a>&gt; for TaggedBase64"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"jf_primitives/signatures/bls/struct.BLSSignKey.html\" title=\"struct jf_primitives::signatures::bls::BLSSignKey\">BLSSignKey</a>&gt; for TaggedBase64"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"jf_primitives/signatures/bls/struct.BLSVerKey.html\" title=\"struct jf_primitives::signatures::bls::BLSVerKey\">BLSVerKey</a>&gt; for TaggedBase64"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"jf_primitives/signatures/bls/struct.BLSVerKey.html\" title=\"struct jf_primitives::signatures::bls::BLSVerKey\">BLSVerKey</a>&gt; for TaggedBase64"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"jf_primitives/signatures/bls/struct.BLSSignature.html\" title=\"struct jf_primitives::signatures::bls::BLSSignature\">BLSSignature</a>&gt; for TaggedBase64"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"jf_primitives/signatures/bls/struct.BLSSignature.html\" title=\"struct jf_primitives::signatures::bls::BLSSignature\">BLSSignature</a>&gt; for TaggedBase64"],["impl&lt;F:&nbsp;PrimeField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.SignKey.html\" title=\"struct jf_primitives::signatures::schnorr::SignKey\">SignKey</a>&lt;F&gt;&gt; for TaggedBase64"],["impl&lt;F:&nbsp;PrimeField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.SignKey.html\" title=\"struct jf_primitives::signatures::schnorr::SignKey\">SignKey</a>&lt;F&gt;&gt; for TaggedBase64"],["impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.VerKey.html\" title=\"struct jf_primitives::signatures::schnorr::VerKey\">VerKey</a>&lt;P&gt;&gt; for TaggedBase64<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Config,</span>"],["impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.VerKey.html\" title=\"struct jf_primitives::signatures::schnorr::VerKey\">VerKey</a>&lt;P&gt;&gt; for TaggedBase64<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Config,</span>"],["impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Affine&lt;P&gt;&gt; for <a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.VerKey.html\" title=\"struct jf_primitives::signatures::schnorr::VerKey\">VerKey</a>&lt;P&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Config,</span>"],["impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.KeyPair.html\" title=\"struct jf_primitives::signatures::schnorr::KeyPair\">KeyPair</a>&lt;P&gt;&gt; for TaggedBase64<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Config,</span>"],["impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.KeyPair.html\" title=\"struct jf_primitives::signatures::schnorr::KeyPair\">KeyPair</a>&lt;P&gt;&gt; for TaggedBase64<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Config,</span>"],["impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.Signature.html\" title=\"struct jf_primitives::signatures::schnorr::Signature\">Signature</a>&lt;P&gt;&gt; for TaggedBase64<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Config,</span>"],["impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.Signature.html\" title=\"struct jf_primitives::signatures::schnorr::Signature\">Signature</a>&lt;P&gt;&gt; for TaggedBase64<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Config,</span>"],["impl&lt;P, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.SignKey.html\" title=\"struct jf_primitives::signatures::schnorr::SignKey\">SignKey</a>&lt;F&gt;&gt; for <a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.VerKey.html\" title=\"struct jf_primitives::signatures::schnorr::VerKey\">VerKey</a>&lt;P&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Config&lt;ScalarField = F&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: PrimeField,</span>"],["impl&lt;F, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.VerKey.html\" title=\"struct jf_primitives::signatures::schnorr::VerKey\">VerKey</a>&lt;P&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.68.1/std/primitive.tuple.html\">(F, F)</a><span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: PrimeField,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Config&lt;BaseField = F&gt;,</span>"],["impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"jf_primitives/elgamal/struct.EncKey.html\" title=\"struct jf_primitives::elgamal::EncKey\">EncKey</a>&lt;P&gt;&gt; for (P::BaseField, P::BaseField)<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Config,</span>"]],
"jf_relation":[["impl&lt;F, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;Affine&lt;P&gt;&gt; for <a class=\"struct\" href=\"jf_relation/gadgets/ecc/struct.Point.html\" title=\"struct jf_relation::gadgets::ecc::Point\">Point</a>&lt;F&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: PrimeField + <a class=\"trait\" href=\"jf_relation/gadgets/ecc/trait.SWToTEConParam.html\" title=\"trait jf_relation::gadgets::ecc::SWToTEConParam\">SWToTEConParam</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: SWParam&lt;BaseField = F&gt;,</span>"],["impl&lt;F, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Affine&lt;P&gt;&gt; for <a class=\"struct\" href=\"jf_relation/gadgets/ecc/struct.Point.html\" title=\"struct jf_relation::gadgets::ecc::Point\">Point</a>&lt;F&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: PrimeField,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Config&lt;BaseField = F&gt;,</span>"],["impl&lt;F, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Affine&lt;P&gt;&gt; for <a class=\"struct\" href=\"jf_relation/gadgets/ecc/struct.Point.html\" title=\"struct jf_relation::gadgets::ecc::Point\">Point</a>&lt;F&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: PrimeField,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: SWCurveConfig&lt;BaseField = F&gt;,</span>"],["impl&lt;F, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Projective&lt;P&gt;&gt; for <a class=\"struct\" href=\"jf_relation/gadgets/ecc/struct.Point.html\" title=\"struct jf_relation::gadgets::ecc::Point\">Point</a>&lt;F&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: PrimeField,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Config&lt;BaseField = F&gt;,</span>"],["impl&lt;F, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"jf_relation/gadgets/ecc/struct.Point.html\" title=\"struct jf_relation::gadgets::ecc::Point\">Point</a>&lt;F&gt;&gt; for Affine&lt;P&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: PrimeField,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Config&lt;BaseField = F&gt;,</span>"],["impl&lt;F, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"jf_relation/gadgets/ecc/struct.Point.html\" title=\"struct jf_relation::gadgets::ecc::Point\">Point</a>&lt;F&gt;&gt; for Projective&lt;P&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: PrimeField,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Config&lt;BaseField = F&gt;,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"jf_relation/constraint_system/struct.BoolVar.html\" title=\"struct jf_relation::constraint_system::BoolVar\">BoolVar</a>&gt; for <a class=\"type\" href=\"jf_relation/constraint_system/type.Variable.html\" title=\"type jf_relation::constraint_system::Variable\">Variable</a>"]],
"jf_utils":[["impl&lt;T:&nbsp;CanonicalSerialize&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.68.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;T&gt; for <a class=\"struct\" href=\"jf_utils/struct.CanonicalBytes.html\" title=\"struct jf_utils::CanonicalBytes\">CanonicalBytes</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()