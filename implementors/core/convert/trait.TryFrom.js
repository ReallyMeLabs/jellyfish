(function() {var implementors = {
"jf_plonk":[["impl&lt;E: Pairing&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;TaggedBase64&gt; for <a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.Proof.html\" title=\"struct jf_plonk::proof_system::structs::Proof\">Proof</a>&lt;E&gt;"],["impl&lt;E, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.74.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&lt;E as Pairing&gt;::BaseField, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.74.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.Proof.html\" title=\"struct jf_plonk::proof_system::structs::Proof\">Proof</a>&lt;E&gt;<span class=\"where fmt-newline\">where\n    E: Pairing&lt;G1Affine = Affine&lt;P&gt;&gt;,\n    P: SWCurveConfig&lt;BaseField = E::BaseField, ScalarField = E::ScalarField&gt;,</span>"],["impl&lt;E: Pairing&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;TaggedBase64&gt; for <a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.BatchProof.html\" title=\"struct jf_plonk::proof_system::structs::BatchProof\">BatchProof</a>&lt;E&gt;"],["impl&lt;E: Pairing&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;TaggedBase64&gt; for <a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.BatchProof.html\" title=\"struct jf_plonk::proof_system::structs::BatchProof\">BatchProof</a>&lt;E&gt;"],["impl&lt;E: Pairing&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;TaggedBase64&gt; for <a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.Proof.html\" title=\"struct jf_plonk::proof_system::structs::Proof\">Proof</a>&lt;E&gt;"],["impl&lt;F: Field&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.74.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;F, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.74.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"jf_plonk/proof_system/structs/struct.ProofEvaluations.html\" title=\"struct jf_plonk::proof_system::structs::ProofEvaluations\">ProofEvaluations</a>&lt;F&gt;"]],
"jf_primitives":[["impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;TaggedBase64&gt; for <a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.Signature.html\" title=\"struct jf_primitives::signatures::schnorr::Signature\">Signature</a>&lt;P&gt;<span class=\"where fmt-newline\">where\n    P: Config,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;TaggedBase64&gt; for <a class=\"struct\" href=\"jf_primitives/signatures/bls_over_bn254/struct.SignKey.html\" title=\"struct jf_primitives::signatures::bls_over_bn254::SignKey\">SignKey</a>"],["impl&lt;F: PrimeField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;TaggedBase64&gt; for <a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.SignKey.html\" title=\"struct jf_primitives::signatures::schnorr::SignKey\">SignKey</a>&lt;F&gt;"],["impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;TaggedBase64&gt; for <a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.Signature.html\" title=\"struct jf_primitives::signatures::schnorr::Signature\">Signature</a>&lt;P&gt;<span class=\"where fmt-newline\">where\n    P: Config,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;TaggedBase64&gt; for <a class=\"struct\" href=\"jf_primitives/signatures/bls_over_bls12381/struct.BLSSignature.html\" title=\"struct jf_primitives::signatures::bls_over_bls12381::BLSSignature\">BLSSignature</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;TaggedBase64&gt; for <a class=\"struct\" href=\"jf_primitives/signatures/bls_over_bls12381/struct.BLSVerKey.html\" title=\"struct jf_primitives::signatures::bls_over_bls12381::BLSVerKey\">BLSVerKey</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;TaggedBase64&gt; for <a class=\"struct\" href=\"jf_primitives/signatures/bls_over_bls12381/struct.BLSSignature.html\" title=\"struct jf_primitives::signatures::bls_over_bls12381::BLSSignature\">BLSSignature</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;TaggedBase64&gt; for <a class=\"struct\" href=\"jf_primitives/signatures/bls_over_bn254/struct.VerKey.html\" title=\"struct jf_primitives::signatures::bls_over_bn254::VerKey\">VerKey</a>"],["impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;TaggedBase64&gt; for <a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.VerKey.html\" title=\"struct jf_primitives::signatures::schnorr::VerKey\">VerKey</a>&lt;P&gt;<span class=\"where fmt-newline\">where\n    P: Config,</span>"],["impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;TaggedBase64&gt; for <a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.KeyPair.html\" title=\"struct jf_primitives::signatures::schnorr::KeyPair\">KeyPair</a>&lt;P&gt;<span class=\"where fmt-newline\">where\n    P: Config,</span>"],["impl&lt;F: FftField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"jf_primitives/toeplitz/struct.ToeplitzMatrix.html\" title=\"struct jf_primitives::toeplitz::ToeplitzMatrix\">ToeplitzMatrix</a>&lt;F&gt;&gt; for <a class=\"struct\" href=\"jf_primitives/toeplitz/struct.CirculantMatrix.html\" title=\"struct jf_primitives::toeplitz::CirculantMatrix\">CirculantMatrix</a>&lt;F&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;TaggedBase64&gt; for <a class=\"struct\" href=\"jf_primitives/signatures/bls_over_bn254/struct.VerKey.html\" title=\"struct jf_primitives::signatures::bls_over_bn254::VerKey\">VerKey</a>"],["impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;TaggedBase64&gt; for <a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.VerKey.html\" title=\"struct jf_primitives::signatures::schnorr::VerKey\">VerKey</a>&lt;P&gt;<span class=\"where fmt-newline\">where\n    P: Config,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;TaggedBase64&gt; for <a class=\"struct\" href=\"jf_primitives/signatures/bls_over_bn254/struct.Signature.html\" title=\"struct jf_primitives::signatures::bls_over_bn254::Signature\">Signature</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;TaggedBase64&gt; for <a class=\"struct\" href=\"jf_primitives/signatures/bls_over_bn254/struct.Signature.html\" title=\"struct jf_primitives::signatures::bls_over_bn254::Signature\">Signature</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;TaggedBase64&gt; for <a class=\"struct\" href=\"jf_primitives/signatures/bls_over_bls12381/struct.BLSVerKey.html\" title=\"struct jf_primitives::signatures::bls_over_bls12381::BLSVerKey\">BLSVerKey</a>"],["impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;TaggedBase64&gt; for <a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.KeyPair.html\" title=\"struct jf_primitives::signatures::schnorr::KeyPair\">KeyPair</a>&lt;P&gt;<span class=\"where fmt-newline\">where\n    P: Config,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;TaggedBase64&gt; for <a class=\"struct\" href=\"jf_primitives/signatures/bls_over_bls12381/struct.BLSSignKey.html\" title=\"struct jf_primitives::signatures::bls_over_bls12381::BLSSignKey\">BLSSignKey</a>"],["impl&lt;F: PrimeField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;TaggedBase64&gt; for <a class=\"struct\" href=\"jf_primitives/signatures/schnorr/struct.SignKey.html\" title=\"struct jf_primitives::signatures::schnorr::SignKey\">SignKey</a>&lt;F&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;TaggedBase64&gt; for <a class=\"struct\" href=\"jf_primitives/signatures/bls_over_bn254/struct.SignKey.html\" title=\"struct jf_primitives::signatures::bls_over_bn254::SignKey\">SignKey</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;TaggedBase64&gt; for <a class=\"struct\" href=\"jf_primitives/signatures/bls_over_bls12381/struct.BLSSignKey.html\" title=\"struct jf_primitives::signatures::bls_over_bls12381::BLSSignKey\">BLSSignKey</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()